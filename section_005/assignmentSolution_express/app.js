const express = require('express');

const app = ecpress();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', 'views');

app.get('/', (req, res, next) => {
    res.render();
});

app.get('/users', (req, res, next) => {
    res.render();
});

app.post('/add-user', (req, res, next) => {
    res.redirect('/users');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
