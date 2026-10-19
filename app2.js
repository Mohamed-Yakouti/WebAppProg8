const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.write('<!DOCTYPE html><html><head><meta charset="utf-8"><title>Tableau HTML</title></head><body>');
  res.write('<h2>Mon Tableau de Données</h2>');
  res.write('<table border="1" style="border-collapse: collapse; padding: 8px;">');
  res.write('<tr><th>Catégorie</th><th>Détails</th></tr>');
  res.write('<tr><td>Discipline</td><td>Muay Thai & MMA</td></tr>');
  res.write('<tr><td>Outil</td><td>Node.js & Postman</td></tr>');
  res.write('</table>');
  res.write('</body></html>');
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});