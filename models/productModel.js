// models/productModel.js
const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', (req, res) => {
  // Assuming products are stored in a file named fakeProducts.json
  const products = require('../fakeProducts.json');
  res.json(products);
});

router.get('/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const products = require('../fakeProducts.json');
  const product = products.find(product => product.id === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

router.delete('/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  let products = require('../fakeProducts.json');
  products = products.filter(product => product.id !== productId);

  // Write updated products back to fakeProducts.json
  fs.writeFileSync('fakeProducts.json', JSON.stringify(products));

  res.json({ success: true, message: 'Product deleted successfully' });
});

router.post('/', (req, res) => {
  const newProduct = req.body;
  newProduct.id = Date.now(); // Using timestamp as a temporary ID
  let products = require('../fakeProducts.json');
  products.push(newProduct);

  // Write updated products back to fakeProducts.json
  fs.writeFileSync('fakeProducts.json', JSON.stringify(products));

  res.json(newProduct);
});

module.exports = router;
