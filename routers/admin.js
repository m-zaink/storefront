const express = require('express');

const baseRoute = '/admin';
const router = express.Router();

const { Product } = require('../models/product');

router.get('/', (req, res) => {
    res.render('admin', { baseRoute: baseRoute });
});

router.get('/add-product', (req, res) => {
    res.render('add-product', { baseRoute: baseRoute + '/add-product' });
});

router.post('/add-product', (req, res) => {
    const productData = req.body;

    const product = new Product(productData.name);

    product.save(() => {
        res.redirect('/shop');
    }, (err) => {
        res.send('Something went wrong');
    });

});

module.exports = {
    router: router,
    baseRoute: baseRoute
};