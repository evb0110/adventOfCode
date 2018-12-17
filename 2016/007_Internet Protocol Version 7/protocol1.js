const fs = require('fs');
const {supportsTLS} = require('./supportsTLS.js');


const input = fs.readFileSync('input.txt', 'utf-8').split('\n');

const res = input.filter((line) => supportsTLS(line));

console.log(res.length);