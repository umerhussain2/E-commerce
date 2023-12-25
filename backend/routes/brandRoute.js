const express = require("express");
const router = express.Router();
const {
  createBrand,
  updateBrand,
  deleteBrand,
  getBrand,
  getallBrand,
} = require("../controller/brandCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

router.post("/create", authMiddleware, isAdmin, createBrand);
router.put("/update/:id", authMiddleware, isAdmin, updateBrand);
router.delete("/delete/:id", authMiddleware, isAdmin, deleteBrand);

router.get("/single/:id", getBrand);
router.get("/all", getallBrand);

module.exports = router;
