const router = require("express").Router();

const {
  verifyUserController,
  usersController,
  affilateController,
  verifyAffilateController,
  sendMailController,
} = require("../controllers/admin.controller");
const { checkAdmin } = require("../helpers/verifyToken");

router.put("/verify", checkAdmin, verifyUserController);
router.get("/users", checkAdmin, usersController);
router.get("/affilates", checkAdmin, affilateController);
router.put("/affilate/verify", checkAdmin, verifyAffilateController);
router.post("/send-mail", checkAdmin, sendMailController);

module.exports = router;
