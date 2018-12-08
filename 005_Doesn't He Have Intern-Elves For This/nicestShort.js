const fs = require('fs');

const input = fs.readFileSync('input.txt')
  .toString()
  .split('\n');

const reg1 = /(\S\S).*\1/;
const reg2 = /(\S)\S\1/;

const nice = line => 
  !!(line.match(reg1) && line.match(reg2));

console.log(input.filter(nice).length);
