function factorial(n) {
  if (n < 0 || n > 12)
    throw new RangeError("n should be greater than 12 or less than 0");
  
  counter = 1;
  
  for (let x = 1; x <= n; x++)
    counter *= x;
  
  return counter;
}
