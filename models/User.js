const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  displayName: {
    type: String,
  },
  email: {
    type: String,
  },
  photo: {
    type: String,
  },
  googleId: {
    type: String,
  },
  amount: {
    type: Number,
    default: 0,
  },
});

mongoose.model("users", userSchema);
