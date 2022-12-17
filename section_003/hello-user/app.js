const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head>');
        res.write('<title></title>');
        res.write('<meta charset="UTF-8">');
        res.write('</head>');
        res.write('<body>');
        res.write('<p>Welcome to my page!</p>');
        res.write('<form action="/create-user" method="POST">')
        res.write('<input type="text" name="username"><button type="submit">送信</button>');
        res.write('</form>')
        res.write('</body>');
        res.write('</html>');
        res.end();
    }
    if (url === '/user') {
        // ...
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title></title></head>');
        res.write('<body>');
        res.write('<ul><li>User 1</li><li>User 2</li></ul>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    }
    // Send a HTML response with some "Page not found text"
    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
});

server.listen(3000);
