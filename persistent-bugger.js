/*

Write a function, persistence, that takes in a positive parameter num and 
returns its multiplicative persistence, which is the number of times you must 
multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)

*/

function persistence(num) {
  len = num.toString().split('').length;
  origLen = num.toString().split('').length;
  strArr = num.toString().split('');
  let x = 0, digit = true, count = 0;

  while (digit == true) {
    if (origLen == 1)
      return 0;
    
    if (len == 2) {
      a = strArr[x] * strArr[x+1];
      strArr = a.toString().split('')
      len = a.toString().split('').length;
      count++;
    } else if (len == 3) {
      a = strArr[x] * strArr[x+1] * strArr[x+2];
      strArr = a.toString().split('')
      len = a.toString().split('').length;
      count++;
    } else if (len == 4) {
      a = strArr[x] * strArr[x+1] * strArr[x+2] * strArr[x+3];
      strArr = a.toString().split('')
      len = a.toString().split('').length;
      count++
    } else if (len == 5) {
      a = strArr[x] * strArr[x+1] * strArr[x+2] * strArr[x+3] * strArr[x+4];
      strArr = a.toString().split('')
      len = a.toString().split('').length;
      count++
    } else if (len == 6) {
      a = strArr[x] * strArr[x+1] * strArr[x+2] * strArr[x+3] * strArr[x+4] * strArr[x+5];
      strArr = a.toString().split('')
      len = a.toString().split('').length;
      count++
    } else if (len == 7) {
      a = strArr[x] * strArr[x+1] * strArr[x+2] * strArr[x+3] * strArr[x+4] * strArr[x+5] * strArr[x+6];
      strArr = a.toString().split('')
      len = a.toString().split('').length;
      count++
    }
      else 
      return count;
  }
}
