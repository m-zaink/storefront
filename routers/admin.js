const express = require('express');

const baseRoute = '/admin';
const router = express.Router();

router.get('/', (req, res) => {
    res.render('admin', { baseRoute: baseRoute });
});

module.exports = {
    router: router,
    baseRoute: baseRoute
};