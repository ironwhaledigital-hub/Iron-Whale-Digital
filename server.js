const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3737;
const FILE = path.join(__dirname, 'index.html');

http.createServer((req, res) => {
    fs.readFile(FILE, (err, data) => {
        res.writeHead(err ? 404 : 200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(err ? 'Not found' : data);
    });
}).listen(PORT, () => {
    console.log('Iron Whale Digital running at http://localhost:' + PORT);
});
