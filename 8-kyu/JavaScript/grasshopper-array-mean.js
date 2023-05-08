var findAverage = function (nums) {
  let sum = 0;
  for (e of nums) {
    sum += e;
  }
  return sum / nums.length;
}
