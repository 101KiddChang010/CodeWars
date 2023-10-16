function largestPairSum (numbers) {
  let largest = Math.min(...numbers);
  
  while (numbers.length !== 0) {
    for (let x = 0; x < numbers.length; x++) {
      if (largest < numbers[0] + numbers[x+1])
        largest = numbers[0] + numbers[x+1];
    }
    numbers.shift();
  }
  
  return largest;
}
