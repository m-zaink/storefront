const express = require('express');
const baseRoute = '/';
const router = express.Router();

router.get('/', (req, res) => {
    res.render('landing', { baseRoute: baseRoute });
});

module.exports = {
    router: router,
    baseRoute: baseRoute
};