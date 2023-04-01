function deleteNth(arr,n){
  let occurrences = {};
  let a = [...arr.reverse()];
  
  arr.forEach(e => {
    occurrences[e] = occurrences[e] ? occurrences[e] + 1 : 1;  
  });
  
  for (const v in occurrences) {
    occurrences[v] > n ? occurrences[v] -= n : occurrences[v] = 0;
    
    while (occurrences[v] !== 0) {
      occurrences[v] > 0 ? (a.splice(a.indexOf(+v), 1), occurrences[v] -= 1) : 1;
    }
  }
  
  return a.reverse();
}
