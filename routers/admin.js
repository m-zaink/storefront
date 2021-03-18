const express = require('express');

const baseRoute = '/admin';
const router = express.Router();

router.get('/', (req, res) => {
    res.render('admin', { baseRoute: baseRoute });
});

router.get('/add-product', (req, res) => {
    res.render('add-product', { baseRoute: baseRoute + '/add-product' });
});

router.post('/add-product', (req, res) => {
    const productData = req.body;
    console.log(productData);

    res.redirect(baseRoute);
});

module.exports = {
    router: router,
    baseRoute: baseRoute
};