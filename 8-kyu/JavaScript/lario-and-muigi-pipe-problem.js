function pipeFix(numbers){
  let min = Math.min(...numbers);
  let max = Math.max(...numbers);
  let arr = [];
  
  for (let x = min; x <= max; x++) {  
    arr.push(x);
  }
  
  return arr;
}
