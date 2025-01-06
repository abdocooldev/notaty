const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let notes = [];

app.post("/notes", (req, res) => {
  const body = req.body;
  console.log("BODY:", body);
  notes.push(body);
  console.log("Notes:", notes);
  res.send(true);
});

app.get("/notes", (req, res) => {
  res.send(notes);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server has started on port ${port}...`);
});
