var express = require("express");
const router = express.Router();
const product = require("../controller/productController");

const { upload } = require("../middleware/fileMiddleware");
const auth = require('../auth/adminAuth')
// Admin route
router.post("/admin", auth, upload.single("image"), product.addProduct);

// All products
router.get("/api", product.getProducts);

// Search route
router.get("/search/:query", product.searchProducts);

// Suggestions
router.get("/suggestions/:id", product.getSuggestions);

// Single product by id
router.get("/:id", product.getProductById);



module.exports = router;
