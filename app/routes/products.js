var express = require('express');
var router = express.Router();

let productsController = require('../controllers/products');

router.get('/list', productsController.list); //get all products
router.post('/create', productsController.create); //add a product
router.get('/get/:productID', productsController.productByID, productsController.read); //find a product by its ID
router.put('/edit/:productID', productsController.update); //update a product by its ID
router.delete('/delete/:productID', productsController.remove); //delete a product from database

module.exports = router;