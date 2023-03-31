function findMultiples(integer, limit) {
  let result = [];
  
  for (let x = integer; x <= limit; x += integer) {
    result.push(x);
  }  

  return result;
}
