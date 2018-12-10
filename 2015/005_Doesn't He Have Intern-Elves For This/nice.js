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
  let letters = line.split('');
  let vowelNumber = letters.filter(l => "aeiou".includes(l)).length;
  return vowelNumber >= 3;
}

const containsGeminate = line => {
  let letters = line.split('');
  let length = letters.length;
  for (let i = 0; i < length - 1; i++) {
    if (letters[i] == letters[i + 1]) return true;
  }
  return false;
}

const doesntContainProhibited = line => {
  return !(
    line.includes("ab")
    || line.includes("cd")
    || line.includes("pq")
    || line.includes("xy")
  )
}

console.log(input.filter(nice).length);