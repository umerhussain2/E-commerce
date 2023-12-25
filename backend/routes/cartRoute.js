const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middlewares/authMiddleware");
const { userCart, getUserCart, emptyCart } = require("../controller/cartCtrl");

router.post("/add", authMiddleware, userCart);
router.get("/user-cart", authMiddleware, getUserCart);
router.delete("/empty-cart", authMiddleware, emptyCart);

module.exports = router;
