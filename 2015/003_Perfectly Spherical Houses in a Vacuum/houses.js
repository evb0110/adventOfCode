const fs = require('fs');

const directions = fs
    .readFileSync('input.txt')
    .toString()
    .split('');

const position = [0, 0];
const houses = {};

for (direction of directions) {
  let positionString = position.join('_');
  houses[positionString]++;
  switch (direction) {
    case '>':
      position[0]++;
      break;
    case '<':
      position[0]--;
      break;
      case '^':
      position[1]++;
      break;
    case 'v':
      position[1]--;
      break;
  }
}

console.log(Object.keys(houses).length);