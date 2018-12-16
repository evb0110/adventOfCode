// Regex and startsWith() solutions took the same 
// amount of time (about 50 sec)


const crypto = require('crypto');
const acHash = data => crypto
  .createHash('md5')
  .update(data)
  .digest("hex");

const fiveZerosString = "00000";
const id = "abbhdwsy";
const startIndex = 0;

let condition = false;
let idx = startIndex;
let passCount = 0;
const pass = [];

while (passCount < 8) {
  let str = id + '' + idx;
  let res = acHash(str);
  condition = res.startsWith(fiveZerosString);
  if (condition) {
    if (
        Number.isInteger(+res[5]) &&
        +res[5] >= 0 &&
        +res[5] < 8 &&
        !pass[+res[5]]      
      ) {
      pass[+res[5]] = res[6];
      passCount++;
      console.log(passCount);
      
    }
  }
  idx++;
}




console.log(pass.join(''));