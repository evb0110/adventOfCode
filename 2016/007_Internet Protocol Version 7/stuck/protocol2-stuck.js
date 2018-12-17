const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8').split('\n');

// WRONG REGEXES!!!
const sslRegex1 = /(^|\])[^[]*(.)(.)\1.*\[[^\]]*\2\1\2/;
const sslRegex2 = /(.)(.)\1[^[]*\].*\2\1\2[^\]]*(\[|$)/;

const supportsSSL = (str, sslRegex1, sslRegex2) => {
  const match1 = str.match(sslRegex1);
  const match2 = str.match(sslRegex2);

  match1 && console.log(match1[1], match1[2], "===");
  match2 && console.log("===", match2[1], match2[2]);
  
  return (match1 || match2);
}



// const str = "zazbz[bzb]cdb"
const res = input.filter((str) => supportsSSL(str, sslRegex1, sslRegex2));
console.log(res.length);
