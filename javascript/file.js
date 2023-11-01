const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
  } else {
    console.log('File contents:', data);
  }
});

const fs = require('fs');

const content = 'Hello, Node.js!';
fs.writeFile('output.txt', content, 'utf8', (err) => {
  if (err) {
    console.error('Error writing to the file:', err);
  } else {
    console.log('File written successfully.');
  }
});
