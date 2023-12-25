const express = require("express");
const router = express.Router();
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const {
  createOrder,
  getOrders,
  getAllOrders,
  updateOrderStatus,
} = require("../controller/orderCtrl");

router.post("/create", authMiddleware, createOrder);
router.get("/user-orders", authMiddleware, getOrders);
router.get("/all", authMiddleware, isAdmin, getAllOrders);
router.put("/update-order/:id", authMiddleware, isAdmin, updateOrderStatus);

module.exports = router;
