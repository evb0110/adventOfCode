const fs = require('fs');

const arr = fs.readFileSync('input.txt').toString().split('');

let sum = 0;
let counter = 0;

for (elem of arr) {
  sum += elem == "(" ? 1 : -1;
  counter++;
  if (sum === -1) console.log("counter:", counter);
}

console.log("sum:", sum);