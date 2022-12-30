/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s){
  s = s.split(" ");
  let lowest = s[0].length;
  
  s.forEach(e => {
    if (lowest > e.length) {
      lowest = e.length
    }
  });
  
  return lowest;
}
