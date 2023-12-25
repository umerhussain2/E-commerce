const express = require("express");
const router = express.Router();
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const {
  createProduct,
  getSingleProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  addToWishlist,
  productRating,
} = require("../controller/productCtrl");

// Admin
router.post("/create", authMiddleware, isAdmin, createProduct);
router.put("/edit/:id", authMiddleware, isAdmin, updateProduct);
router.delete("/delete/:id", authMiddleware, isAdmin, deleteProduct);

// Public
router.get("/all", getAllProducts);
router.get("/single/:id", getSingleProduct);
router.put("/wishlist", authMiddleware, addToWishlist);
router.put("/rating", authMiddleware, productRating);

module.exports = router;
