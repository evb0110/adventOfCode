const fs = require('fs');

const inputData = fs.readFileSync('input.txt').toString().split("\n");

const minPerimeter = (a, b, c) => {
  return 2 * Math.min( a + b, b + c, a + c );
}

const ribbon = (a, b, c) => minPerimeter(a, b, c) + a * b * c;

const totalRibbon = inputData
  .map(a => a.split('x').map(n => +n))
  .map(arr => ribbon(...arr))
  .reduce((acc, el) => acc + el);

console.log(totalRibbon);