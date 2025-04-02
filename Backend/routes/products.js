// backend/routes/products.js
const router = require('express').Router();
let Product = require('../models/product');

router.route('/').get((req, res) => {
  Product.find()
    .then(products => res.json(products))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Product.findById(req.params.id)
    .then(product => res.json(product))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').post((req, res) => {
  const { name, price, image, description, category, stock } = req.body;
  const newProduct = new Product({ name, price, image, description, category, stock });

  newProduct.save()
    .then(() => res.json('Product added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Add routes for update and delete as needed

module.exports = router;