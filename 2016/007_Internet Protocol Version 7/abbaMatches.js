const {allMatches} = require('./allMatches.js');
  

const abbaMatches = (str) => {
  const regexABBA = /([^[\]])([^[\]])\2\1/g;

  
  let res = allMatches(str, regexABBA);
  let filteredRes = res.filter((m) => m[1] != m[2]);
  let verdict = !!filteredRes[0];
  
  return verdict;
}

module.exports = { abbaMatches }