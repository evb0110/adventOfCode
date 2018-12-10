const fs = require('fs');

const inputData = fs.readFileSync('input.txt').toString();


const surface = (a, b, c) => {
  let surfaces = [a*b, b*c, a*c];
  
  let sumSurface = surfaces.reduce((acc, el) => acc + el);
  let totalSurface = 2 * sumSurface + Math.min(...surfaces);
  return totalSurface;
}

const result = inputData.split(/\n/).map(a => a.split('x')).map(arr => surface(...arr)).reduce((acc, el) => acc + el);

console.log(result);