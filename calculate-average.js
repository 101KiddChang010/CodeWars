/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

let findAverage = array => {
  let total = 0;
  
  array.forEach(e => total += e);
  
  return (array.length > 0 ? total / array.length : 0);
};
