const buffer = Buffer.from('Hello, Node.js', 'utf-8');

const str = buffer.toString('utf-8');
console.log(str); 

buffer.write('Updated', 7, 7, 'utf-8');
console.log(buffer.toString('utf-8')); 
