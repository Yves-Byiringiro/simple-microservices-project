const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

require('dotenv').config();

const port = process.env.PORT
const app = express();
app.use(bodyParser.json());

const events = [];

app.post("/events", (req, res) => {
  const event = req.body;

  events.push(event);

  axios.post("http://localhost:8000/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://localhost:8001/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://localhost:8003/events", event).catch((err) => {
    console.log(err.message);
  });

  // make a request on comments moderation service

  // axios.post("http://localhost:8004/events", event).catch((err) => {
  //   console.log(err.message);
  // });
  
  res.send({ status: "OK" });
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});