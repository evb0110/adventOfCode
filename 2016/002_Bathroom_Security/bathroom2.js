const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf-8').split('\n');

const initialNumber = 5;

const numberToNode = (number) => {
  switch (number) {
    case 1: return [2, 4];
    case 2: return [1, 3];
    case 3: return [2, 3];
    case 4: return [3, 3];
    case 5: return [0, 2];
    case 6: return [1, 2];
    case 7: return [2, 2];
    case 8: return [3, 2];
    case 9: return [4, 2];
    case 'A': return [1, 1];
    case 'B': return [2, 1];
    case 'C': return [3, 1];
    case 'D': return [2, 0];
    default: throw `wrong number`;
  }
}

const nodeToNumber = (node) => {
  nodeString = node.join('_');
  switch (nodeString) {
    case "2_4": return 1;
    case "1_3": return 2;
    case "2_3": return 3;
    case "3_3": return 4;
    case "0_2": return 5;
    case "1_2": return 6;
    case "2_2": return 7;
    case "3_2": return 8;
    case "4_2": return 9;
    case "1_1": return 'A';
    case "2_1": return 'B';
    case "3_1": return 'C';
    case "2_0": return 'D';
  }
}

const makeStep = (number, instruction) => {

  const node = numberToNode(number);
  switch (instruction) {
    case "U": node[1]++; break;
    case "R": node[0]++; break;
    case "D": node[1]--; break;
    case "L": node[0]--; break;
  }
  
  return (nodeToNumber(node) || number);
}

const digestLine = ([startNumber, totalNumber], inputLine) => {
  const finalNumber =
    inputLine
      .split('')
      .reduce(
        (acc, el) =>
          makeStep(acc, el),
        startNumber
      );
  return ([finalNumber, totalNumber.toString() + finalNumber]);
}

const result = input.reduce(
  (acc, inputLine) =>
    digestLine(acc, inputLine),
  [initialNumber, '']
);

console.log(result);