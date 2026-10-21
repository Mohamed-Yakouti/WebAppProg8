const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;

// 1. Recipe name starting with 'M' (matches Mohamed)
const recipeName = "Mohamed's Muffins";

// 2. Array of objects with name, amount, unit
const ingredients = [
  { name: "Flour", amount: 2, unit: "cups" },
  { name: "Sugar", amount: 1, unit: "cup" },
  { name: "Milk", amount: 1, unit: "cup" },
  { name: "Butter", amount: 0.5, unit: "cup" },
  { name: "Vanilla Extract", amount: 1, unit: "tsp" }
];

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  // 3. Generate a random index to select an ingredient as "unused"
  const randomIndex = Math.floor(Math.random() * ingredients.length);
  
  // 4. Find the unused ingredient and filter the used ones
  const unusedIngredient = ingredients[randomIndex];
  const usedIngredients = ingredients.filter((_, idx) => idx !== randomIndex);

  // 5. Build HTML response (Title, Heading, Body, Container elements)
  res.write('<!DOCTYPE html><html><head><meta charset="utf-8">');
  res.write(`<title>${recipeName}</title></head><body>`);
  res.write(`<h1>${recipeName} Recipe Generator</h1>`);
  
  res.write('<div style="padding: 15px; border: 2px solid #2b6cb0; border-radius: 8px; font-family: sans-serif; max-width: 500px;">');
  res.write('<h3>Ingredients Used:</h3><ul>');
  
  usedIngredients.forEach(item => {
    res.write(`<li>${item.amount} ${item.unit} of ${item.name}</li>`);
  });
  
  res.write('</ul>');
  res.write(`<p style="color: #c53030; font-weight: bold;">Unused Ingredient (Randomly Left Out): ${unusedIngredient.name}</p>`);
  res.write('</div></body></html>');
  
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Bonus server running at http://${hostname}:${port}/`);
});