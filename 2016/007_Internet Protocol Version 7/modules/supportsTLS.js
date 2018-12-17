const { abbaMatches } = require('./abbaMatches.js');

const supportsTLS = (str) => {
  const splitterRegex = /\[[^\]]+\]/g;

  const goodParts = str.split(splitterRegex);
  const badParts = str.match(splitterRegex);

  let goodMatching = [];
  let badMatching = [];

  if (goodParts) {
    goodMatching = goodParts.filter(str => abbaMatches(str));
  }
  if (badParts) {
    badMatching = badParts.filter(str => abbaMatches(str));
  }

  return (!!goodMatching.length && !badMatching.length);
}

module.exports = { supportsTLS }