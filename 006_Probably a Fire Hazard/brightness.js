const fs = require('fs');

let input = fs.readFileSync('input.txt').toString().split('\n');

input = input.map(elem => elem.replace("n o", "no"));

const switcher = (command, light) => {
  light = light || 0;
  switch(command) {
    case 'turnon': 
      light += 1;
      break;
    case 'turnoff':
      light -= 1;
      if (light < 0) { light = 0}
      break;
    case 'toggle':
      light += 2;
      break;
    default:
      throw `illegal command: ${command}`
  }
  return light;
}

const directions = [];
input.forEach((elem, i) => {
  const words = elem.split(' ');
  const command = words[0];
  const [xFrom, yFrom] = words[1].split(',');
  const [xTo, yTo] = words[3].split(',');
  directions.push({
    command,
    xFrom,
    yFrom,
    xTo,
    yTo
  })
})

const inside = (x, y, xFrom, yFrom, xTo, yTo) => {
  return (
    (xFrom <= x) &&
    (x <= xTo) &&
    (yFrom <= y) &&
    (y <= yTo)
    )
}

let counter = 0;

for (let x = 0; x < 1000; x++) {
  for (let y = 0; y < 1000; y++) {
    let light = 0;
    for (direction of directions) {
      const {command, xFrom, yFrom, xTo, yTo} = direction;
      if (inside(x, y, xFrom, yFrom, xTo, yTo)) {
        light = switcher(command, light);
      }
    }
    counter += light;
  }
}

console.log(counter);