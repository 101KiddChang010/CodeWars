/*

Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.

Method calling example:

fizzbuzz(3) -->  [1, 2, "Fizz"]

*/

var fizzBuzz = function(n) {
    let answer = [];

    for (let x = 1; x <= n; x++) {
        if (x % 5 === 0 && x % 3 === 0) {
            answer.push("FizzBuzz");
        } else if (x % 5 === 0) {
            answer.push("Buzz");
        } else if (x % 3 === 0) {
            answer.push("Fizz");
        }  else {
            answer.push(x);
        }
    }
    return answer;
};
