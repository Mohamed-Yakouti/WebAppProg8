const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
  // Add CORS headers so the local browser file can talk to the server
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }

  const fake_url = "https://fake.com/path" + req.url;
  const url = new URL(fake_url);
  const search_params = url.searchParams;

  if (req.method === 'GET') {
    const x = parseFloat(search_params.get("x")) || 0;
    const y = parseFloat(search_params.get("y")) || 0;

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