const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

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
  axios.post("http://localhost:8004/events", event).catch((err) => {
    console.log(err.message);
  });
  res.send({ status: "OK" });
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(8002, () => {
  console.log("Listening on port 8002");
});