const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8').split('\n');

const splitterRegex = /\[[^\]]+\]/g;

const trios = (line) => {
  const triosArray = [];
  const length = line.length;
  for (let i = 0; i < length - 2; i++) {
    triosArray.push(line.substr(i, 3));
  }
  return triosArray;
}

const aba = (trio) => {
  if (trio.length !== 3) {
    throw `wrong trio`;
  }
  let verdict = (trio[0] == trio[2]) && (trio[0] != trio[1]);
  return !!verdict;
}

const abaTrios = (line) => {
  return trios(line).filter((trio) => aba(trio))
}

const abaToBab = (trio) => {
  if ((trio.length !== 3) || !(aba(trio))) {
    throw `wrong trio`;
  }
  return trio[1] + trio[0] + trio[1];
}

const intersection = ( set1, set2 ) => {
  const intersection = [...set1].filter(x => (set2.indexOf(x) + 1));
  return intersection;
}

let counter = 0;
input.forEach((line) => {
  const goodParts = line.split(splitterRegex);
  const badParts = line.match(splitterRegex);
  const goodTrios = [];
  const badTrios = [];
  goodParts.forEach((line) => {
    goodTrios.push(...abaTrios(line));
  })
  badParts.forEach((line) => {
    badTrios.push(...abaTrios(line));
  })

  const badTriosTransformed = badTrios.map((trio) => abaToBab(trio));
  const goodBadIntersection = intersection(goodTrios, badTriosTransformed);
  if(goodBadIntersection.length) counter++;
  
})

console.log(counter);
