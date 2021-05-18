const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const cookieSession = require("cookie-session");
require("./models/users");
require("./services/passport");
const authRouters = require("./routers/auth");
const keys = require("./config/keys");

mongoose.connect(keys.MONGODB_SRV, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  // useFindAndModify: false,
});

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.COOKIE_KEY],
  })
);
app.use(passport.initialize());
app.use(passport.session());

authRouters(app);

app.listen(PORT, () => {
  console.log("Emaily Server listening on port " + PORT);
});
