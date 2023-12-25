const express = require("express");
const router = express.Router();
const {
  createEnquiry,
  updateEnquiry,
  deleteEnquiry,
  getEnquiry,
  getallEnquiry,
} = require("../controller/enqCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

router.post("/create", createEnquiry);
router.put("/update/:id", authMiddleware, isAdmin, updateEnquiry);
router.delete("/delete/:id", authMiddleware, isAdmin, deleteEnquiry);

router.get("/single/:id", getEnquiry);
router.get("/all", getallEnquiry);

module.exports = router;
