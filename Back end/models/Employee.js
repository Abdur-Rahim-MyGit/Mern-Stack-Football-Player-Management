const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let employeeschema = new Schema({
  name: {
    type: String,
    required: true
  },
 email: {
    type: String
  },
  empno: {
    type: String
  },
  score: {
    type: String
  },
  assists: {
    type: String
  },
  apna: {
    type: String
  },
    });
module.exports = mongoose.model("Employee", employeeschema);
