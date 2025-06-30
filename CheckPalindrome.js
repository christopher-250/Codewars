function isPalindrome(x) {
  let lowCase = x.toLowerCase();
  let reversed = lowCase.split('').reverse().join('');
  return lowCase === reversed;
}
