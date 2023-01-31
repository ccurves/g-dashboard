const router = require("express").Router();
const passport = require("passport");

//Validation
const {
  vaildRegister,
  validLogin,
  forgotPasswordValidator,
  resetPasswordValidator,
} = require("../helpers/vaild");

const {
  registerController,
  loginController,
  activationController,
  forgetController,
  resetController,
} = require("../controllers/auth.controller.js");

router.get("/login/success", (req, res) => {
  if (req.user) {
    console.log(req.user);
    res.status(200).json({
      success: true,
      message: "successful",
      user: req.user,
    });
  }
});

router.get("/login/failed", (req, res) => {
  return res.status(401).json({
    error: "User signup failed with google",
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(`${process.env.CLIENT_URL}/login`);
});

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/login/success",
    failureRedirect: "/login/failed",
  })
);

router.post("/register", vaildRegister, registerController);
router.post("/login", validLogin, loginController);
router.post("/activation", activationController);
router.put("/forgotPassword", forgotPasswordValidator, forgetController);
router.put("/resetPassword", resetPasswordValidator, resetController);

module.exports = router;
