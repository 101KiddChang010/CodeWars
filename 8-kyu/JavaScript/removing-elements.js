function removeEveryOther(arr){
  let result = [];
  for (let x = 0; x < arr.length; x += 2) {
    result.push(arr[x]);
  }
  return result;
}
