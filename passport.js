const passport = require("passport");
const User = require("./models/User");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const { errorHandler } = require("./helpers/dbErrorHandling");
const refresh = require("passport-oauth2-refresh");

let rToken;

require("dotenv").config({
  path: "./config/config.env",
});
const strategy = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
  },
  function (accessToken, refreshToken, profile, cb, done) {
    console.log(profile);

    const { email, given_name, family_name, email_verified, gender } = profile;

    User.findOne({ email }).exec((err, user) => {
      if (user) {
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
          expiresIn: "7d",
        });
        const { password, ...others } = user._doc;

        return cb(err, others, token);
      } else {
        let password = email + process.env.JWT_SECRET;
        user = new User({
          firstname: given_name,
          lastname: family_name,
          email,
          password: CryptoJS.AES.encrypt(
            password,
            process.env.PASS_SEC
          ).toString(),
          gender: "male",
        });

        console.log(user);

        user.save((err, data) => {
          console.log(data);
          if (err) {
            console.log("Save error", errorHandler(err));
            return done(null, false, { message: errorHandler(err) });
          } else {
            const token = jwt.sign({ _id: data._id }, process.env.JWT_SECRET, {
              expiresIn: "7d",
            });

            const { password, ...others } = data._doc;
            console.log(others);
            return cb(err, token, others);
          }
        });
      }
    });
  }
);

passport.use(strategy);
refresh.use(strategy);
refresh.requestNewAccessToken(
  strategy.name,
  "1//03TLlZZ4d1HhJCgYIARAAGAMSNwF-L9Irq4ADDxDVBU2sRAbusAv6G1h97nuQ0wk2iOlZOxHEZBiM0nsiQIRxtDFjfATBcXaSS4U",
  function (err, accessToken, refreshToken) {}
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
