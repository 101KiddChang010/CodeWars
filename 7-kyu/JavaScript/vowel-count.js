/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
  let total = 0;
  
  str.split('').forEach(e => {
    switch(e) {
        case 'a': 
          total++;
          break;
        case 'e':
          total++;
          break;
        case 'i':
          total++;
          break;
        case 'o':
          total++;
          break;
        case 'u':
          total++;
          break;
    }
  });
  
  return total;
}
