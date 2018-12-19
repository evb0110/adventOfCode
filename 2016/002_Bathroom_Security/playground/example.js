const makeCalendar = () => {
  const calendar = {};

  calendar.xmas = ['December', 25];
  calendar.newYear = ['January', 1];
  
  return (day) => calendar[day];
}

calendar = makeCalendar();
const xmasArray = calendar('xmas');

console.log(calendar('xmas')); // [ 'December', 25 ]

xmasArray[1]++;

console.log(calendar('xmas')); // [ 'December', 26 ]
