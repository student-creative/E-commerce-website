var express = require('express');
var router = express.Router();


const category = require('../controller/categoryController');

router.get("/", category.getCategories);       // /categories
router.get("/:id",category.getCategoryById);  // /categories/:id
router.get("/:categoryId/:productId", category.getProductInCategory);

// router.get("/search/:query",category. searchCategoryProductsOnly);

module.exports = router;
