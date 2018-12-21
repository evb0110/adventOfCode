const input = "ABCD(2x2)BCD(2x2)EFG";

let commandState = 0;
let result = '';

for (let i = 0; i < input.length; ) {
  console.log(i);
  let symbol = input[i];
  if (symbol == ' ') i++;
  if (commandState === 0 && symbol !== "(") {
    result += symbol;
    i++;
  }
  if (symbol === "(") {
    let commandString = '';
    commandState = 1;
    i++;
    while ((symbol = input[i]) !== ")") {
      commandString += symbol;
      i++;
    }

    let command = commandString.match(/\d+/g).map(x => +x);
    let stringToMultiply = '';
    for (let j = 0; j < command[0];) {
      i = i + j;
      stringToMultiply += input[i];
    }
    console.log(stringToMultiply);
    
    i++;
  }
}