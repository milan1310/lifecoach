const mongoose = require("mongoose");

const subscribeSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  teleNumber: {
    type: String,
    trim: true,
  },
  region:{
    type: String,
    trim: true,
    uppercase: true
  },
});

const Subscribe = mongoose.model('subscribe', subscribeSchema);

module.exports = Subscribe;
