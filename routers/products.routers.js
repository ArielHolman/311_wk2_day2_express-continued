const express = require('express')
const router  = express.Router()
const productsController = require('../controllers/products.controllers')

router.get('/products',productsController.listProduct)

router.get('/products/:productId',productsController.showProduct)

router.post('/products', productsController.createProduct)

router.put('/products/:productId',productsController.updateProduct)

router.delete('/products/:productId',productsController.deleteProduct)

module.exports = router