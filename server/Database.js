const mongoose = require("mongoose");
const Note = require("./schemas/note");

class Database {
  constructor() {
    this.Url = "mongodb://127.0.0.1:27017/notaty";
  }
  connect() {
    mongoose
      .connect(this.Url)
      .then(() => {
        console.log("Database Connected Successfully.");
      })
      .catch((err) => {
        console.log("Error in Connecting to Database.", err);
      });
  }
  addNote(note) {
    return new Promise((resolve, reject) => {
      note["createdDate"] = new Date();
      note["updatedDate"] = new Date();
      let newNote = new Note(note);
      newNote
        .save()
        .then((doc) => resolve(doc))
        .catch((err) => reject(err));
    });
  }
  getNotes() {
    return new Promise((resolve, reject) => {
      Note.find({})
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
  getNoteById(id) {
    return new Promise((resolve, reject) => {
      Note.findById(id)
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
}
module.exports = Database;
