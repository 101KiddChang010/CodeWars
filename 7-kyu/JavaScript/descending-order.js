/*
Your task is to make a function that can take any non-negative integer as an argument 
and return it with its digits in descending order. Essentially, rearrange the digits to 
create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/

function descendingOrder(n){
  let num = n.toString().split(''), largest, arr = [];

  while(num.length != 0) {
    largest = num[0];
    num.forEach(e => {
      largest < e ? largest = e : null;
    });
    arr.push(largest)
    num.splice(num.indexOf(largest),1);
  }
  
  return Number(arr.join(''));
}
