const histogram = (line) => {
    const letters = line.split('');
    let frequencies = {};
    letters.forEach(letter => {
      frequencies[letter] = frequencies[letter] + 1 || 1;
    });
    return {...frequencies};
  }