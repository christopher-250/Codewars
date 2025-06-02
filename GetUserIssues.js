function getIssuer(number) {
  const numString = number.toString();
  const length = numString.length;
  
  if(numString.startsWith("34") || numString.startsWith("37") && length === 15){
    return "AMEX";
  }
  if(numString.startsWith("6011") && length === 16){
    return "Discover";
  }
  if(numString.startsWith("51")||
    numString.startsWith("52") ||
    numString.startsWith("53") ||
    numString.startsWith("54") ||
    numString.startsWith("55") &&
     length === 16
    ){
    return "Mastercard";
  }
  if(numString.startsWith("4") && (length === 13 || length === 16)){
    return "VISA";
  }
  
  return "Unknown";
}
console.log(getIssuer("4222222222222"));