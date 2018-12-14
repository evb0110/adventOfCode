const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf-8').split('\n');

const splitRoom = (line) => {
  const leftRegex = /^[^0-9]+/;
  const idRegex = /[0-9]+/;
  const checksumRegex = /\[\S+\]/;


  const left = line.match(leftRegex)[0].replace(/-/g, '');
  const id = + line.match(idRegex)[0];
  const checksum = line.match(checksumRegex)[0].replace(/\[|\]/g, '');

 
  return [...[left, id, checksum]];
}

const histogram = (line) => {
  const letters = line.split('');
  let frequencies = {};
  letters.forEach(letter => {
    frequencies[letter] = frequencies[letter] + 1 || 1;
  });
  return {...frequencies};
}

let res = splitRoom('vxupkizork-sgmtkzoi-pkrrehkgt-zxgototm-644[kotgr]')[0];
console.log(histogram(res));
