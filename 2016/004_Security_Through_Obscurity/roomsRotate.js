const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8').split('\n');
const aCode = 97;

const rotateLetter = (letter, number, aCode) => {
  const alphabet = 26;
  const fromA = (letter.charCodeAt() - aCode + number) % alphabet;
  return String.fromCharCode(aCode + fromA);
}

const splitRoom = (line) => {
  const leftRegex = /^[^0-9]+/;
  const idRegex = /[0-9]+/;
  const checksumRegex = /\[\S+\]/;

  const left = line.match(leftRegex)[0].replace(/-/g, '');
  const id = + line.match(idRegex)[0];
  const checksum = line.match(checksumRegex)[0].replace(/\[|\]/g, '');

  return [...[left, id, checksum]];
}

res = input.map((room) => splitRoom(room)).map((room) => {
  return room[0]
    .split('')
    .map((l) => rotateLetter(l, room[1], aCode))
    .join('') 
    + '_' + room[1];
})

console.log(res.filter((str) => str.includes('north')));