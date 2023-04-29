function firstNonConsecutive (arr) {
  for (let x = 0; x < arr.length-1; x++) {
    if (arr[x]+1 !== arr[x+1])
      return arr[x+1];
  }
  
  return null;
}
