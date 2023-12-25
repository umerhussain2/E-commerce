const express = require("express");
const router = express.Router();
const {
  createUser,
  loginUserCtrl,
  updatePassword,
  logout,
  getAllUsers,
  getSingleUser,
  deleteUser,
  UpdateUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
  loginAdmin,
  getWishlist,
  saveAddress,
} = require("../controller/userCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

router.post("/register", createUser);

router.put("/update-password", authMiddleware, updatePassword);
router.post("/login", loginUserCtrl);
router.post("/admin-login", loginAdmin);
router.get("/all-users", getAllUsers);
// router.get("/refresh", authMiddleware, handleRefreshToken); //with authMid getting user
router.get("/refresh", handleRefreshToken);
router.get("/logout", logout);
router.get("/wishlist", authMiddleware, getWishlist);

router.get("/single-user/:id", authMiddleware, isAdmin, getSingleUser);
router.delete("/delete-user/:id", deleteUser);

router.put("/update-user", authMiddleware, UpdateUser);
router.put("/save-address", authMiddleware, saveAddress);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);

module.exports = router;
