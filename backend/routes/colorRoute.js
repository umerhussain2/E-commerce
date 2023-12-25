const express = require("express");
const router = express.Router();
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const {
  createColor,
  updateColor,
  deleteColor,
  getColor,
  getallColor,
} = require("../controller/colorCtrl");

router.post("/create", authMiddleware, isAdmin, createColor);
router.put("/update/:id", authMiddleware, isAdmin, updateColor);
router.delete("/delete/:id", authMiddleware, isAdmin, deleteColor);
router.get("/single/:id", getColor);
router.get("/all", getallColor);

module.exports = router;
