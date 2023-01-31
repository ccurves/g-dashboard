const router = require("express").Router();

const {
  uploadController,
  walletController,
  updateController,
  affilateController,
  deleteController,
  statsController,
  readController,
} = require("../controllers/user.controller");

const { verifyToken, checkAuthorization } = require("../helpers/verifyToken");

router.put("/kyc/upload", uploadController);
router.post("/affilate/apply", affilateController);
router.get("/wallet/:id", verifyToken, walletController);
router.get("/:id", verifyToken, readController);
router.put("/update/:id", checkAuthorization, updateController);
router.delete("/delete/:id", checkAuthorization, deleteController);
router.get("/stats/:id", checkAuthorization, statsController);

module.exports = router;
