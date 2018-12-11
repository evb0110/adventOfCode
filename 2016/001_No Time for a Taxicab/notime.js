const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf-8')
  .split(',').map(el => el.trim());

let directionIndex = 0; 
  // 0123 => NorthEastSouthWest
let coordinates = [0, 0];

const calculateInstructions = (input) => {
  const instructions = [];
  input.forEach(el => {
    const rotation = el[0];
    const number = + el.slice(1);
    instructions.push({ rotation, number })
  })
  return instructions;
}

const makeStep = (directionIndex, coordinates, instruction) => {
  ({ rotation, number } = instruction);
  directionIndex += (rotation == 'R') ? 1 : 3;
  directionIndex = directionIndex % 4;

  switch (directionIndex) {
    case 0: coordinates[1] += number; break;
    case 1: coordinates[0] += number; break;
    case 2: coordinates[1] -= number; break;
    case 3: coordinates[0] -= number; break;
  }

  return { directionIndex, coordinates };
}

const instructions = calculateInstructions(input);


let result = instructions.reduce(
  (acc, instruction) => makeStep(
    acc.directionIndex, acc.coordinates, instruction
  ),
  ({ directionIndex, coordinates })
);

({coordinates} = result);

console.log(coordinates.map(num => Math.abs(num)).reduce((a,b) => a + b));