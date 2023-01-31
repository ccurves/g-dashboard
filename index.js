const cookieSession = require("cookie-session");
const express = require("express");
const passport = require("passport");
const cors = require("cors");
const connectDB = require("./config/db");
require("./passport");
const authRoute = require("./routes/auth.route");
const transRoute = require("./routes/transaction.route");
const sharesRoute = require("./routes/shares.route");
const userRoute = require("./routes/user.route");
const adminRoute = require("./routes/admin.route");
const path = require("path");

const app = express();

require("dotenv").config({
  path: "./config/config.env",
});

//Connect to Database
connectDB();

//Use bodyParser
app.use(express.json());

app.use(
  cookieSession({
    name: "session",
    keys: ["ccurves"],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

//Config for only development
if (process.env.NODE_ENV === "development") {
  app.use(
    cors({
      origin: process.env.CLIENT_URL,
      methods: "GET,POST,PUT,DELETE",
      credentials: true,
    })
  );
}

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// app.use(
//   contentSecurityPolicy({
//     useDefaults: true,
//     directives: {
//       defaultSrc: ["'self'"],
//       connectSrc: ["'self'"],
//       scriptSrc: ["'self'", "'unsafe-inline'"],
//       objectSrc: ["'none'"],
//       upgradeInsecureRequests: [],
//     },
//     reportOnly: false,
//   })
// );

app.use("/api/auth", authRoute);
app.use("/api/transaction", transRoute);
app.use("/api/share", sharesRoute);
app.use("/api/admin", adminRoute);
app.use("/api/user", userRoute);

if (process.env.NODE_ENV === "production") {
  // set static folder
  app.use(express.static("client/build"));
  
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
