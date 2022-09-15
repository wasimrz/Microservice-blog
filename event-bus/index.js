const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");
const app = express();
app.use(bodyParser.json());

app.use(cors());
let events = [];
app.post("/events", (req, res) => {
  const event = req.body;
  events.push(event);
  console.log({ events });
  axios.post("http://post-clusterip-serv:4000/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://comments-serv:4001/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://query-serv:4002/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://moderation-serv:4003/events", event).catch((err) => {
    console.log(err.message);
  });
  res.send({ status: "OK" });
});
app.get("/events", (req, res) => {
  res.send(events);
});
app.listen(4005, () => {
  console.log("Listening on 4005");
});
