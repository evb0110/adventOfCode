const R = require('ramda');
const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf-8').split('\n');



// Initializing a 2-dimensional array
const width = 50
const height = 6;

const initScreen = Array(width)
for (i = 0; i < width; i++)
  initScreen[i] = Array(height).fill(false);

const rect = (A, B, screen) => {
  const newScreen = screen.map((col, x) => {
    return col.map((el, y) => {
      if ((x < A) && (y < B)) return true;
      return el;
    })
  })
  return newScreen;
}

const roty = (A, B, screen) => {
  const yrot = A;
  const newScreen = screen.map((col, x) => {
    return col.map((el, y) => {
      if (y !== yrot) return el;
      const xPrev = (x - B + width) % width;
      return screen[xPrev][y];
    })
  })
  return newScreen;
}

const rotx = (A, B, screen) => {

  const xrot = A;
  const newScreen = screen.map((col, x) => {
    return col.map((el, y) => {
      if (x !== xrot) return el;
      
      const yPrev = (y - B + height) % height;
       return screen[x][yPrev];
    })
  })
  return newScreen;
}

[RECT, ROTX, ROTY] =
  [rect, rotx, roty].map((fn) => {
    return R.curry(fn)
})

const dispatch = (line => {
  const [A, B] = line.match(/\d+/g);
  if (line.includes("rect")) return [RECT, A, B];
  if (line.includes("column")) return [ROTX, A, B];
  if (line.includes("row")) return [ROTY, A, B];
})

const result = input.reduce((acc, line) => {
  const currentScreen = acc;
  const [fn, A, B] = dispatch(line);
  const newScreen = fn(A, B, currentScreen);
  return newScreen;
}, initScreen);

console.log(result.toString().split(',').filter(a => a == 'true').length);


// console.log(
//   R.compose(
//     ROTX(1, 1),
//     ROTY(0, 4),
//     ROTX(1, 1), 
//     RECT(3, 2),
//     )(screen)
//   );


