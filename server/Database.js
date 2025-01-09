const mongoose = require("mongoose");

class Database {
  constructor() {
    this.Url = "mongodb://127.0.0.1:27017//notaty";
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
}
module.exports = Database;
