const express = require("express");
const router = express.Router();
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const { uploadPhoto, productImgResize } = require("../middlewares/uploadImage");
const { uploadImages, deleteImages } = require("../controller/uploadCtrl");

router.put(
  "/image",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 10),
  productImgResize,
  uploadImages
);

router.delete("/delete-img/:id", authMiddleware, isAdmin, deleteImages);

// router.delete("/delete-image/:id", authMiddleware, isAdmin, deleteImages);

module.exports = router;
