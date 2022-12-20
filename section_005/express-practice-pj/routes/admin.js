const path = require('path');
const express = require('express');

const rootDir = require('../util/path');
const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
    console.log('In the middleware!');
    // res.send('<h1>This is The "Add Product" Page Here!</h1>');
    // res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formCSS: true,
        activeAddProduct: true,
    });
    // next();
});

// if (form.method === 'POST')
router.post('/add-product', (req, res, next) => {
    console.log(req.body.title);
    products.push({ title: req.body.title });
    res.redirect('/');
});

exports.routes = router;
exports.products = products;
