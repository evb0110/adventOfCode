const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8');
const R = require('ramda');

const leftInitial = '';

const step = ([left, right]) => {
  const commandRegex = /\([^\)]+\)/;
  const match = right.match(commandRegex);
  if (!match) { return left + right };
  const matchString = match[0];
  const matchLength = matchString.length;
  const matchIndexBefore = match['index'] - 1;
  const matchIndexAfter = match['index'] + matchLength;
  const [A, B] = matchString.match(/\d+/g).map(x => +x);
  const stringToRepeat = right.slice(matchIndexAfter, matchIndexAfter + A);
  const currentRight = right.slice(matchIndexAfter + A);
   const currentLeft = left + right.slice(0, matchIndexBefore + 1) + stringToRepeat.repeat(B);
  return step([currentLeft, currentRight]);
}

let result = step([leftInitial, input]);
console.log(result.length);