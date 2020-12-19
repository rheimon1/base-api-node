const mongoose = require('mongoose');

const Product = require('../Schemas/ProductSchema');

module.exports = mongoose.model('Product', Product);