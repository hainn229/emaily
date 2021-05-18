const mongoose = require('mongoose');
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
  // provider: {
  //   type: String,
  // },
});

mongoose.model('users', userSchema);
