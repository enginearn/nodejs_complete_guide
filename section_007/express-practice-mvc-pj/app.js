// const http = require('http');
const path = require('path');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shop = require('./routes/shop');
const errorController = require('./controllers/errors');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'static')));

app.set('view engine', 'ejs'); // 'handlebars'
app.set('views', 'views');

app.use('/admin', adminRoutes);
app.use(shop);

app.use(errorController.get404);

app.use('/', (req, res, next) => {
    console.log('This is always runs!');
    next();
});

app.listen(3000);
