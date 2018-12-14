const histogramFunctional = (line) => {
  const letters = line.split('');

  const processLetter = (currentHistogram, letter) => {
    histogram = {...currentHistogram};
    histogram[letter] = histogram[letter] + 1 || 1;
    return histogram;
  }

  return letters.reduce((acc, letter) => processLetter(acc, letter), {});
}

console.log(histogramFunctional(''));
