const express = require('express');
const router = express.Router();

// Controllers
const { mainController, resources } = require('../Services/utils');
const productController = require('./Controllers/ProductController');

// middlewares
const validateMiddleware = require('./Middlewares/ValidateMiddleware');
const validateProduct = require('./Validations/ProductValidation');


// Routes
resources(router,  validateProduct, '/products', productController);

module.exports = router;