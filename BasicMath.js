function calculate(str) {
    const numbers = str.split(/plus|minus/);
    const operators = str.match(/plus|minus/g);

  let result = parseInt(numbers[0]);

  for (let i = 0; i < operators.length; i++) {
    const nextNum = parseInt(numbers[i + 1]);
    if (operators[i] === 'plus') {
      result += nextNum;
    } else if (operators[i] === 'minus') {
      result -= nextNum;
    }
  }
  return String(result);
}