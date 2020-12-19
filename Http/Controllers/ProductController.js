const { request, response } = require('express');
const BaseController = require('./BaseController');
const ProductService = require("../../Services/ProductService");
const HttpMessages = require('../HttpMessages');

class ProductController extends BaseController {
    constructor(req, res) {
        super(req, res);
        this.service = ProductService;
    }
}

module.exports = ProductController;