const { DiffieHellman } = require('crypto');
const path = require('path');

const filePath = '/Users/username/Documents/index.js';
const textPath = '/Users/username/Documents/file.txt';
const dirPath = '/Users/username/Documents';
const relativePath = path.relative('/Users/username/Documents', filePath);

console.log(path.isAbsolute(filePath)); // true
console.log(path.isAbsolute(relativePath)); // false


console.log(path.basename(filePath)); // index.js   
console.log(path.basename(dirPath)); // Documents

console.log(path.dirname(dirPath)); // /Users/username/Documents