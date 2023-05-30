function getDivisorsCnt(n){
  let counter = 0;
  
  for (let x = 1; x <= Math.sqrt(n); x++) {
    if (n % x === 0) {
      counter++;
      if (x !== n / x)
        counter++;
    }
  }
  
  return counter;
}
