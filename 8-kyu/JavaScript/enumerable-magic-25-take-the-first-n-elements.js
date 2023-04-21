function take(arr, n) {
  if (n === 0 || arr.length === 0)
    return [];
  else if (arr.length < n)
    return arr;
  
  let result = [];
  
  for (let x = 0; x < n; x++) 
    result.push(arr[x]);
  
  return result;
}
