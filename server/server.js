const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const Database = require("./Database");
const db = new Database();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// POST API
app.post("/notes", (req, res) => {
  const body = req.body;
  db.addNote(body)
    .then((data) => res.send(data))
    .catch((err) => res.status(500).send(err));
});

// Get All Data API Or Search For title
app.get("/notes", (req, res) => {
  const { title } = req.query;
  if (title) {
    db.getNotesByTitle(title)
      .then((data) => res.send(data))
      .catch((err) => res.status(500).send(err));
  } else {
    db.getNotes()
      .then((data) => res.send(data))
      .catch((err) => res.status(500).send(err));
  }
});

// Get Specific Note Data API
app.get("/notes/:id", (req, res) => {
  const { id } = req.params;
  db.getNoteById(id)
    .then((data) => {
      if (!data) {
        res.status(404).send("Note id not exist, Requested id: " + id);
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send(err);
      console.log(err);
    });
});

// Update Note API
app.put("/notes", (req, res) => {
  db.updateNote(req.body)
    .then((data) => {
      if (!data) {
        res.status(404).send("Note id not exist, Requested id: " + id);
      } else {
        res.send(data);
      }
    })
    .catch((err) => res.status(500).send(err));
});

// Delete Note API
app.delete("/notes/:id", (req, res) => {
  const { id } = req.params;
  db.deleteNote(id)
    .then((data) => {
      if (!data) {
        res.status(404).send("Note id not exist, Requested id: " + id);
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send(err);
      console.log(err);
    });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server has started on port ${port}...`);
  db.connect();
});
