/*
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]
*/

export function between(a: number, b: number): number[] {
  let arr: number[] = [];
  
  for (let x: number = a; x <= b; x++) {
    arr.push(x);
  }
  
  return arr;
}
