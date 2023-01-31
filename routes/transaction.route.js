const router = require("express").Router();

const {
  purchaseController,
  withdrawController,
  transController,
  userTransController,
  updateController,
  deleteController,
} = require("../controllers/transaction.controller");

const { verifyToken, checkAdmin } = require("../helpers/verifyToken");

router.get("/all", checkAdmin, transController);
router.get("/:id", userTransController);
router.get("/purchase/:ref", purchaseController);
router.post("/withdraw", verifyToken, withdrawController);
router.put("/update/:id", checkAdmin, updateController);
router.delete("/delete/:id", checkAdmin, deleteController);

module.exports = router;
