function sumMix(x){
  let result = 0;
  x = x.map(e => Number(e));
  x.forEach(e => result += e);
  return result;
}
