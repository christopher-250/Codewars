function findAverage(array) {
  if(array.length === 0)return 0;
  
  let sum = array.reduce((accum,num) => accum + num,0);
  return sum/array.length;
}