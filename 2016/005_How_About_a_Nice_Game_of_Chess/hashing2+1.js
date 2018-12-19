// A state/functional approach 
// to the (2nd part of) same problem


const crypto = require('crypto');
const acHash = data => crypto
  .createHash('md5')
  .update(data)
  .digest("hex");

const fiveZerosString = "00000";
const id = "abbhdwsy";
const startIndex = 0;

const idx = startIndex;
const passCount = 0;
const pass = [];

const state = {
  id,
  idx,
  passCount,
  pass,
  acHash,
  fiveZerosString
}

const makeIteration = (state) => {
  let { id, idx, passCount, pass, acHash, fiveZerosString } = state;
  const str = id + '' + idx;
  const currentHash = acHash(str);
  
  const isGoodHash = currentHash.startsWith(fiveZerosString);
  let currentPass = [...pass];
    if (
       isGoodHash
       && +currentHash[5] >= 0
       && +currentHash[5] < 8
       && !currentPass[+currentHash[5]]
     ) {
    currentPass[+currentHash[5]] = currentHash[6];
    passCount++;
    console.log(passCount, idx);
  }
  idx++;
  return { id, idx, passCount, pass: currentPass, acHash, fiveZerosString }
}

let currentState = {...state};

while (currentState.passCount < 8) {
  currentState = makeIteration(currentState);
}

console.log(`The password is: ${currentState.pass.join('')}`)