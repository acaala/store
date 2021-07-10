const express = require('express');
const productController = require("../controllers/productController")

const router = express.Router();

router.get("/", productController.product_index)

router.post("/create-product", productController.product_create)

router.get("/product/:id", productController.product_details)

router.delete("/product/:id", productController.product_delete)

module.exports = router;