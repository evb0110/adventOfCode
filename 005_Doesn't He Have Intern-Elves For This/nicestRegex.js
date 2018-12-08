const fs = require('fs');

const input = fs.readFileSync('input.txt')
  .toString()
  .split('\n');

const nice = line => {
  return (
    containsTwoPairs(line) &&
    hasRepeatedLetter(line)
  )
}

const containsTwoPairs = line => {
  const match = line.match(/(\S\S).*\1/ || []);
  return !!match;
}

const hasRepeatedLetter = line => {
  const match = line.match(/(\S)\S\1/ || []);
  return !!match;
}

console.log(input.filter(nice).length);
