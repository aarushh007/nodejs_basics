const path = require('path')

const filePath = path.join('/docs', 'read_text.txt');
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'docs', 'read_me.txt');
console.log(absolute)