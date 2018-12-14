const makeCalendar = () => {
  const calendar = {};

  calendar.xmas = ['December', 25];
  calendar.newYear = ['January', 1];
  
  const calendarFunction = (day) => {
    return calendar[day];
  }

  return calendarFunction;
}


calendarFunction = makeCalendar();

module.exports = {
  calendarFunction,
}