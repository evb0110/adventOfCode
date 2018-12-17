const { abbaMatches } = require('./abbaMatches.js');

const supportsTLS = (str) => {
  const splitterRegex = /\[[^\]]+\]/g;

  const goodParts = str.split(splitterRegex);
  const badParts = str.match(splitterRegex);

  const good = goodParts.filter(str => abbaMatches(str));
  const bad = badParts.filter(str => abbaMatches(str));
  

  return (!!good.length && !bad.length);
}


// const str = "abba[dbba]";
// console.log(supportsTLS(str));

module.exports = {supportsTLS}