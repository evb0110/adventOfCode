const fs = require('fs');

const directions = fs
  .readFileSync('input.txt')
  .toString()
  .split('');

const directionsSanta = directions.filter(
  ( elem, i ) => !(i % 2)
);
const directionsRobot = directions.filter(
  ( elem, i ) => !!(i % 2)
);

const houseCount = (directions)  =>  {
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

  return houses;
}

const housesSanta = houseCount(directionsSanta);
const housesRobot = houseCount(directionsRobot);

const housesVisited = {...housesSanta, ...housesRobot};

console.log(Object.keys(housesVisited).length);
