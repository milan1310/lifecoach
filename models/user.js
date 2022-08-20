const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    region:{
      type: String,
      trim: true,
      uppercase: true
    },
    email: {
      type: String,
      required: true
    },
    mobileNumber:{
      type: Number,
      required: true
    },
    uuid: {
      type: String,
      required: true
    },
    submited: {
        type: Boolean,
        default: false
    },
    testdata: {
        type: Array,
        default: []
    },
    personalityType: {
      type: String,
      default: ""
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
