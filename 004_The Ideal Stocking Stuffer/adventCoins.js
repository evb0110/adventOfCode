const crypto = require('crypto');
let acHash = data => crypto
  .createHash('md5')
  .update(data)
  .digest("hex");

const input = "bgvyzdsv";
let number = 0;
let startsWithZeros = false;
let hash;

do {
  number++;
  let coin = input + number;
  hash = acHash(coin);
  startsWithZeros = hash.toString().startsWith("000000");
} while ( !startsWithZeros );

  console.log(number, hash);
