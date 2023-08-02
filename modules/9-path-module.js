const path = require("path");

console.log(path.sep);

//path join method

const filePath = path.join("/modules/content", "subfolder", "test.txt");
console.log(filePath);

// base name

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname,'content', 'subfolder','test.txt')
console.log(absolute);
 