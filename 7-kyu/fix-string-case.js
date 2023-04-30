function solve(s){
    let low = 0, up = 0;
  
  for (let x = 0; x < s.length; x++) {
    if (s[x] === s[x].toUpperCase()) {
      up++;
    } else {
      low++;
    }
  }
  
  return up === low || low > up ? s.toLowerCase() : s.toUpperCase();  
}
