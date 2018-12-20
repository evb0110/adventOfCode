const R = require('ramda');

// Initializing a 2-dimensional array
const width = 50;
const height = 6;

const screen = Array(width)
for (i = 0; i < width; i++)
  screen[i] = Array(height).fill(false);


const rect = (screen, A, B) => {
  const newScreen = screen.map((col, x) => {
    return col.map((el, y) => {
      if ((x < A) && (y < B)) return true;
      return el;
    })
  })
  return newScreen;
}

const roty = (screen, A, B) => {
  const yrot = A - 1;
  const newScreen = screen.map((col, x) => {
    return col.map((el, y) => {
      if (y !== yrot) return el;
      const xPrev = (x - B + width) % (width - 1);
      return screen[xPrev][y];
    })
  })
  return newScreen;
}

const rotx = (screen, A, B) => {
  const xrot = A - 1;
  const newScreen = screen.map((col, x) => {
    return col.map((el, y) => {
      if (x !== xrot) return el;
      const yPrev = (y - B + width) % (width - 1);
      return screen[x][yPrev];
    })
  })
  return newScreen;
}

const dispatch = (line => {
  
})

console.log(rotx(rect(screen, 2, 2), 1, 2));


