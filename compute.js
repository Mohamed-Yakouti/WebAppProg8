const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
  const fake_url = "https://fake.com/path" + req.url;
  const url = new URL(fake_url);
  const search_params = url.searchParams;

  if (req.method === 'GET') {
    const x = parseFloat(search_params.get("x")) || 0;
    const y = parseFloat(search_params.get("y")) || 0;

    // Using Math.hypot(x, y) for computation
    const result = Math.hypot(x, y);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`g(${x}, ${y}) is ${result}`);
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});