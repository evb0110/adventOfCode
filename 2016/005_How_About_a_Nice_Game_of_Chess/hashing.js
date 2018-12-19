const crypto = require('crypto');
const acHash = data => crypto
  .createHash('md5')
  .update(data)
  .digest("hex");

const fiveZerosRegex = /^00000/;
const id = "abbhdwsy";

let condition = false;
let startIndex = 0;
let idx = startIndex;
let passCount = 0;
let pass = ''

while (passCount < 8) {
  let str = id + '' + idx;
  let res = acHash(str);
  condition = res.match(fiveZerosRegex);
  if (condition) {
    console.log(res[5]);
    pass += res[5];
    passCount++;
  }
  idx++;
}

console.log(pass);