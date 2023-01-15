/*
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

function evenOrOdd(number) {
  return Math.abs(number) % 2 === 1 ? "Odd" : "Even";
}
