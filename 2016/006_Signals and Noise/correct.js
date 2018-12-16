const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8');
const lines = input.split('\n');

const initialState = Array(5);

const digestLine = (state, line) => {
  const letters = line.split('');
  const currentState = [...state];
  letters.forEach((l, i) => {
    if (currentState[i] && currentState[i][l]) {
      currentState[i][l]++;
    } else {
      const tempObject = {};
      tempObject[l] = 1;
      currentState[i] = {...currentState[i], ...tempObject}
    }
  })
  return currentState;
}

const finalState = lines.reduce((state, line) => {
  return(digestLine(state, line))
}, initialState);

const result = finalState.map((obj) => {
  return Object.entries(obj).sort((a, b) => b[1] - a[1])
});

console.log(result.map(el => el[0][0]).join(''));