const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.post("/events", (req, res) => {
  const event = req.body;

  axios.post("http://localhost:8000/events", event);
  axios.post('http://localhost:8001/events', event);
  axios.post("http://localhost:8003/events", event);

  res.send({ status: "OK" });
});



app.listen(8002, () => {
  console.log("Listening on port 8002 ....");
});
