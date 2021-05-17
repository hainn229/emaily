require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
require("./models/users")
require("./services/passport");
const authRouters = require("./routers/auth");

mongoose.connect(process.env.MONGODB_SRV, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  // useFindAndModify: false,
});

const app = express();
const PORT = process.env.PORT || 5000;
authRouters(app);

app.listen(PORT, () => {
  console.log("Emaily Server listening on port " + PORT);
});

// app.use(
//   cookieSession({
//     maxAge: 30 * 24 * 60 * 60 * 1000,
//     keys: [keys.cookieKey],
//   })
// );
// app.use(passport.initialize());
// app.use(passport.session());

// require("./routers/auth")(app);

module.exports = app;
