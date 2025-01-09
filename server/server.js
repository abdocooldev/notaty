const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const Database = require("./Database");
const db = new Database();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/notes", (req, res) => {
  const body = req.body;
  db.addNote(body)
    .then((data) => res.send(data))
    .catch((err) => res.status(500).send(err));
});

app.get("/notes", (req, res) => {
  db.getNotes()
    .then((data) => res.send(data))
    .catch((err) => res.status(500).send(err));
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server has started on port ${port}...`);
  db.connect();
});
