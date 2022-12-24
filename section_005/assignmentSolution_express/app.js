const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const epressHandlebars = require('express-handlebars');

const port = 3000;

const users = [];

app.engine('hbs', epressHandlebars.engine({defaultLayout: 'main-layout', extname: 'hbs'}));
app.set('view engine', 'ejs'); // 'pug', 'ejs', 'hbs'
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
    res.render('index', { pageTitle: 'Add User' });
});

app.get('/users', (req, res, next) => {
    res.render('users', { pageTitle: 'Users', users: users, hasUsers: users.length > 0 });
});

app.post('/add-user', (req, res, next) => {
    users.push({ name: req.body.username });
    res.redirect('/users');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
