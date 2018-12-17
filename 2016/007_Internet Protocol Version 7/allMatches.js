const allMatches = (str, reg) => {
  const matches = [];
  let match;
  while ((match = reg.exec(str))) {
    matches.push(match);
  }
  return matches;
}

// let res = allMatches("abdefdba", /.(b)./g);
// console.log(res);

module.exports = { allMatches }