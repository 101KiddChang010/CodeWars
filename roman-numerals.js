/*

Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Example:

solution(1000); // should return 'M'
Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
Remember that there can't be more than 3 identical symbols in a row.

*/

function solution(number){
  let symbol = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
  let num = [1,4,5,9,10,40,50,90,100,400,500,900,1000]
  let i = 12, romanNum = "", div;
  
  while (number > 0) {
    div = Math.floor(number/num[i]);
    number %= num[i];
    
    while (div--)
      romanNum += symbol[i];
    i--
  }

  return romanNum;
}
