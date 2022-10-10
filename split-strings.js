/*

Complete the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters then it should replace the 
missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

*/

function solution(str){
  if (str.length > 0) {
    let array = str.match(/.{1,2}/g);

    for (key in array) {
      if (array[key].length < 2) {
        array[key] += "_";
      }
    }
    return array;
  }
  return [];
}
