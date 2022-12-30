/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

function positiveSum(arr) {
  let total = 0;
  for (let x = 0; x < arr.length; x++) {
    if (arr[x] > 0) {
      total += arr[x];
    }
  }
  return total;
}
