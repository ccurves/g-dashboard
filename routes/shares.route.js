const router = require("express").Router();

const {
  createController,
  readController,
  updateController,
} = require("../controllers/shares.controller");
const { checkAdmin } = require("../helpers/verifyToken");

router.post("/create", checkAdmin, createController);
router.get("/", checkAdmin, readController);
router.put("/:id", checkAdmin, updateController);

module.exports = router;
