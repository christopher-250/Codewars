function largestPower(n){
  let k = 0;
  while( 3**k < n){
    k++;
  }
  return k-1 
}
console.log(largestPower(28));