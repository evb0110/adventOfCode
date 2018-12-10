const fs = require('fs');

const input = fs.readFileSync('input.txt')
  .toString()
  .split('\n');

const nice = (line) => {
  return (
    containsThreeVowels(line) &&
    containsGeminate(line) &&
    doesntContainProhibited(line)
  )
}

const containsThreeVowels = line => {
  let vowelNumber = (line.match(/[aeiou]/g) || []).length;
  return vowelNumber >= 3;
}

const containsGeminate = line => {
  let match = line.match(/(\S)\1/);
  return !!match;
}

const doesntContainProhibited = line => {
  let match = line.match(/ab|cd|pq|xy/);
  return !match;
}

console.log(input.filter(nice).length);