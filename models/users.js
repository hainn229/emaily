const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
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
  // provider: {
  //   type: String,
  // },
});

const UsersModel = mongoose.model("users", usersSchema);
module.exports = UsersModel;
