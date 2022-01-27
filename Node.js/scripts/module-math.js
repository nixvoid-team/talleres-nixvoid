function getAverage(numbers) {
  return numbers.reduce((average, currentNumber) => {
    return average + currentNumber/numbers.length;
  }, 0);
}

module.exports = {
  getAverage
}