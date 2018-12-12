const fs = require('fs');

const { numberToNode, nodeToNumber } = require('./convertKeypad');

const input = fs.readFileSync('input.txt', 'utf-8').split('\n');

const initialNumber = 5;

const makeStep = (number, instruction) => {
  
  const node = [...numberToNode(number)]; 
    // without spread mutating node spoils all the keypad data
  switch (instruction) {
    case "U": node[1]++; break;
    case "R": node[0]++; break;
    case "D": node[1]--; break;
    case "L": node[0]--; break;
  }
  
  return (nodeToNumber(node) || number);
}

const digestLine = ([startNumber, totalNumber], inputLine) => {
  const finalNumber =
  inputLine
  .split('')
  .reduce(
    (acc, el) =>
    makeStep(acc, el),
    startNumber
    );
    return ([finalNumber, totalNumber.toString() + finalNumber]);
  }
  
  const result = input.reduce(
    (acc, inputLine) =>
    digestLine(acc, inputLine),
    [initialNumber, '']
    );  
    
console.log(result);
