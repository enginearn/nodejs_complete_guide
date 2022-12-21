// const http = require('http');
const path = require('path');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
// const expressHandlebars = require('express-handlebars');

const rootDir = require('./util/path');
const admin = require('./routes/admin');
const shop = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'static')));

// app.engine('NAME', expressHandlebars.engine());
// 'NAME' is the name of the engine, which is used in app.set('view engine', 'NAME')
// and also file extension of the template files,
// e.g. 'NAME' is 'handlebars' then the template files should be 'handlebars' or 'hbs'
// or 'html' or 'htm' or 'jade' or 'twig' or 'vash' or 'pug' or 'ejs'.
// For Handlebars, the default layout file is 'main.handlebars' or 'main.hbs'
// app.engine(
//     'hbs',
//     expressHandlebars.engine({
//         layoutsDir: 'views/layouts',
//         defaultLayout: 'main-layout',
//         extname: 'hbs',
//     })
// );
// 'handlebars' or 'pug' or 'ejs' or 'hbs' or 'html' or 'htm' or 'jade' or 'twig' or 'vash'
// app.engine('handlebars', expressHandlebars({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'handlebars'}));
app.set('view engine', 'ejs'); // 'handlebars'
app.set('views', 'views');

app.use('/admin', admin.routes);
app.use(shop);

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
    res.status(404).render('404', { pageTitle: 'Page Not Found', path: '' });
});

app.use('/', (req, res, next) => {
    console.log('This is always runs!');
    next();
});

app.listen(3000);

// const server = http.createServer(app);
// server.listen(3000);
