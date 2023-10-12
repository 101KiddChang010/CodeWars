function pickIt(arr){
  var odd=[],even=[];
  
  for (let x of arr) {
    if (x % 2 === 0)
      even.push(x);
    else
      odd.push(x);
  }
  
  return [odd,even];
}
