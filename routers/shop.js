const express = require('express');

const baseRoute = '/shop';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Shop Routes');
});

module.exports = {
    router: router,
    baseRoute: baseRoute
};