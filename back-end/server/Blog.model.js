const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let BlogModel = new Schema({
  authorName: String,
  blogTitle: String,
  blogContent: String,
  created_time: String,
});

module.exports = mongoose.model("Blog", BlogModel);
