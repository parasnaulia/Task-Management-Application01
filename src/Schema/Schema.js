const mongoose = require("mongoose");
const TaskSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  Discription: {
    type: String,
    required: true,
  },
  Due_Date: {
    type: String,
    required: true,
  },
});
const Task = mongoose.model("Task", TaskSchema);
module.exports = Task;