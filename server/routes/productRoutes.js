const express = require('express');
const product = require('../controllers/productControllers');

const router = express.Router();

router.get('/', product.getProducts);

router.get('/:id', product.getProductById);

module.exports = router;
