const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;

const facts = [
  "Martial arts training improves discipline, cardiovascular health, and core stability.",
  "Node.js runs on Google Chrome's V8 JavaScript engine, executing code outside the browser.",
  "The HTTP 200 OK status code indicates that the request has succeeded.",
  "Asynchronous event-driven architecture allows Node.js to handle many concurrent requests efficiently.",
  "CORS headers are essential when accessing server endpoints from client-side scripts hosted on different origins."
];

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  // Select a random fact from the array
  const randomFact = facts[Math.floor(Math.random() * facts.length)];

  res.write('<!DOCTYPE html><html><head><meta charset="utf-8"><title>Bonus Fact Server</title></head><body>');
  res.write('<h1>Mohamed El Yakouti\'s Bonus Fact Generator</h1>');
  res.write(`<div style="padding: 15px; border: 2px solid #333; background-color: #f0f4f8; font-family: sans-serif; border-radius: 8px; max-width: 500px;">`);
  res.write(`<h3>Random Fact / Tip:</h3>`);
  res.write(`<p style="font-size: 16px; color: #1a202c;">${randomFact}</p>`);
  res.write(`</div>`);
  res.write('</body></html>');
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Bonus server running at http://${hostname}:${port}/`);
});