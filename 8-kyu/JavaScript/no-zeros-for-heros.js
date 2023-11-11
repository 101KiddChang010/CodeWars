function noBoringZeros(n) {
  while (n.toString()[n.toString().length - 1] == 0) {
    n = n.toString().split('').slice(0, -1).join('');
  }
  
  return Number(n);
}
