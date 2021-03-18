const express = require('express');

const { Product } = require('../models/product');

const baseRoute = '/shop';

const router = express.Router();

router.get('/', (req, res) => {
    Product.fetchAllProducts((products) => {
        res.render('shop', { baseRoute: baseRoute, products: products });
    });
});

module.exports = {
    router: router,
    baseRoute: baseRoute
};