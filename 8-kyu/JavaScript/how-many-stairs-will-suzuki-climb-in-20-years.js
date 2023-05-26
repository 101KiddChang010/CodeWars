function stairsIn20(s){
  let counter = 0;
  
  for(let x = 0; x < s.length; x++) {
    for (let e in s[x]) {
      counter += s[x][e];
    }
  }
  
  return counter * 20;
}
