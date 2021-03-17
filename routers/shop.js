const express = require('express');

const baseRoute = '/shop';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('shop', { baseRoute: baseRoute });
});

module.exports = {
    router: router,
    baseRoute: baseRoute
};