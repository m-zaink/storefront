const express = require('express');
const baseRoute = '/';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Landing Page');
});

module.exports = {
    router: router,
    baseRoute: baseRoute
};