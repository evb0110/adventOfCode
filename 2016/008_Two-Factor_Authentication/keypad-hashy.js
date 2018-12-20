const fs = require('fs');
const sleep = require('sleep');

const input = fs.readFileSync('input.txt', 'utf-8')
  .split('\n');

const width = 50;
const height = 6;

const initialScreen = {};

for (i = 0; i < width; i++) {
  for (j = 0; j < height; j++) {
    initialScreen[[i, j].toString()] = ' ';
  }
}

const rect = (A, B, screen) => {
  const currentScreen = {...screen};
  for (i = 0; i < A; i++) {
    for (j = 0; j < B; j++) {
      currentScreen[[i, j].toString()] = '*';
    }
  }
  return currentScreen;
}

const row = (A, B, screen) => {
  const currentScreen = {...screen};
  for (i = 0; i < width; i++) {
    let oldIndex = [i, A].toString();
    let newIndex = [((i + B) % width), A].toString();
    currentScreen[newIndex] =
        screen[oldIndex];
  }
  return currentScreen;
}

const column = (A, B, screen) => {
  const currentScreen = {...screen};
  for (j = 0; j < height; j++) {
    let oldIndex = [A, j].toString();
    let newIndex = [A, ((j + B) % height)].toString();
    currentScreen[newIndex] =
        screen[oldIndex];
  }
  return currentScreen;
}

process.stdout.write('\033c');

const result = input.reduce((screen, line, iteration) => {
    const [A, B] = line.match(/\d+/g).map(x => +x);
    if (line.includes('rect')) {
      currentScreen = rect(A, B, screen);
    }
    if (line.includes('row')) {
      currentScreen = row(A, B, screen);
    }
    if (line.includes('column')) {
      currentScreen = column(A, B, screen);
    }
    visualize(currentScreen, iteration);
    return currentScreen;
  },
  initialScreen
);

const count = Object.values(result).reduce((acc, el) => {
   return el == ' ' ? acc : acc + 1;
  }, 0
);

console.log(`Total count of pixels: ${count}`);



function visualize(screen, iteration) {
  if (iteration < 174) {
    process.stdout.write('\033c');
  }

  for (j = 0; j < height; j++) {
    let row = '';
    for (i = 0; i < width; i++) {
      row += screen[[i,j].toString()];
    }
    console.log(row);
  }
  console.log(iteration);
  sleep.msleep(150);

}