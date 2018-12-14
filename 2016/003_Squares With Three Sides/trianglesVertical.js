const fs = require('fs');

const input = fs
  .readFileSync('input.txt', 'utf-8')
  .match(/\d+/g)
  .map(n => +n);

const isTriangle = (a, b, c) => 
    ((a<b+c) && (b<a+c) && (c<a+b));

const nineNumbers = (counter, input) => {
  if (input.length == 0) return counter;
  let currentCounter = counter;
  const currentInput = [...input];
  const nine = currentInput.splice(0, 9);
  const a = [nine[0], nine[3], nine[6]];
  const b = [nine[1], nine[4], nine[7]];
  const c = [nine[2], nine[5], nine[8]];
  [a, b, c].forEach(triangle => {
    if (isTriangle(...triangle)) currentCounter++;
  })
  return nineNumbers(currentCounter, currentInput);
}

const result = nineNumbers(0, input);
console.log(result);