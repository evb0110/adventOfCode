const fs = require('fs');

const input = fs
  .readFileSync('input.txt', 'utf-8')
  .split('\n')
  .map(line => line
          .match(/\S+/g)
          .map(n => +n)
  )

const isTriangle = (a, b, c) => ((a<b+c)&&(b<a+c)&&(c<a+b));

const trueTriangles = input.filter(triangle => isTriangle(...triangle));

console.log(trueTriangles.length);


