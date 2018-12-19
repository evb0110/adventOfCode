const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8').split('\n');

const proceedRoom = (currentSum, room) => {
  const splitRoom = (line) => {
    const leftRegex = /^[^0-9]+/;
    const idRegex = /[0-9]+/;
    const checksumRegex = /\[\S+\]/;

    const left = line.match(leftRegex)[0].replace(/-/g, '');
    const id = + line.match(idRegex)[0];
    const checksum = line.match(checksumRegex)[0].replace(/\[|\]/g, '');

    return [...[left, id, checksum]];
  }
  
  const histogramFunctional = (line) => {
    const letters = line.split('');
  
    const processLetter = (currentHistogram, letter) => {
      histogram = {...currentHistogram};
      histogram[letter] = histogram[letter] + 1 || 1;
      return histogram;
    }
  
    return letters.reduce((acc, letter) => processLetter(acc, letter), {});
  }

  const histogramToArray = (histogram) => {
    return Object.keys(histogram).sort((a, b) => {
      a_ = -histogram[a];
      b_ = -histogram[b];
      if (a_ == b_) {
        a_ = a.charCodeAt();
        b_ = b.charCodeAt();
      }
      return Math.sign(a_ - b_);
    })
  }

  [left, id, checksum] = splitRoom(room);
  const myHistogram = histogramFunctional(left);
  const arr = histogramToArray(myHistogram);
  const myChecksum = arr.slice(0, 5).join('');
  return (myChecksum == checksum)
    ? currentSum + id
    : currentSum;
}

const res = input.reduce((acc, el) => proceedRoom(acc, el), 0);

console.log(res);