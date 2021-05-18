const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const UsersModel = require("../models/users");
const keys = require("../config/keys");

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.GOOGLE_CLIENT_ID,
      clientSecret: keys.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      //   proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await UsersModel.findOne({ googleId: profile.id });
      if (existingUser) {
        console.log("E X I S T I N G  U S E R !");
        return done(null, existingUser);
      } else {
        const user = await new UsersModel({
          displayName: profile.displayName,
          email: profile._json.email,
          photo: profile._json.picture,
          googleId: profile.id,
        }).save();
        return done(null, user);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  UsersModel.findById(id).then((user) => {
    done(null, user);
  });
});
