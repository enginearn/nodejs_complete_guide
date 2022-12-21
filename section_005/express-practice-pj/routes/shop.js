const path = require('path');
const express = require('express');

const rootDir = require('../util/path');
const admin = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    // console.log('Shop js ', admin.products);
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    const products = admin.products;
    // this is for 'hbs' or 'handlebars' template engine
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true,
        // layout: false
    });
});

module.exports = router;
