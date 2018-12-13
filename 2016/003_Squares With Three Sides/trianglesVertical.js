const fs = require('fs');

const input = fs
  .readFileSync('input.txt', 'utf-8')
  // .split('\n').join(' ')
  .match(/\d+/g)
  .map(n => +n);

const isTriangle = (a, b, c) => ((a<b+c)&&(b<a+c)&&(c<a+b));

// const trueTriangles = input.filter(triangle => isTriangle(...triangle));

let counter = 0

while (input.length) {
  let nine = input.splice(0, 9);
  console.log(nine);
  
}


