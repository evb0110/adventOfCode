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
  return { ...frequencies };
}

const histogramToArray = (frequencies) => {
  return Object.keys(frequencies).sort((a, b) => {
      a_ = -frequencies[a];
      b_ = -frequencies[b];
    if (a_ == b_) {
      a_ = a.charCodeAt();
      b_ = b.charCodeAt();
    }
    return (a_ - b_) / Math.abs(a_ - b_);
  })
}

const proceedRoom = (currentSum, room) => {
  ([left, id, checksum] = splitRoom(room));
  const myHistogram = histogram(left);
  const arr = histogramToArray(myHistogram);
  const myChecksum = arr.slice(0, 5).join('');
  return (myChecksum == checksum) 
    ? currentSum + id
    : currentSum;
}

let res = input.reduce((acc, el) => proceedRoom(acc, el), 0);

console.log(res);
