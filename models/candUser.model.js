const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  username: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  resume: {
    required: false,
    type: String,
  },
  profile: {
    required: false,
    type: String,
  },
});

module.exports = mongoose.model("CanData", dataSchema);
