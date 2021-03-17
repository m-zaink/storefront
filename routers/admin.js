const express = require('express');

const baseRoute = '/admin';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Admin Routes');
});

module.exports = {
    router: router,
    baseRoute: baseRoute
};