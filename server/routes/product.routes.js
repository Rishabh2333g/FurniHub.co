const express = require('express');
const router = express.Router();
const productController = require('../controller/product.controller');

// Create a new product
router.post("/addproduct", productController.createProduct);

// Remove a product
router.post("/removeproduct", productController.removeProduct);

// Get all products
router.get("/allproducts", productController.getAllProducts);

// Get new collections
router.get("/newcollections", productController.getNewCollections);

// Get popular products in women's category
router.get("/popularinwomen", productController.getPopularInWomen);

// Search for a product
router.get("/search", productController.searchProductByName);

module.exports = router;
