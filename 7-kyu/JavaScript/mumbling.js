/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s) {
	s = s.split('');
  let counter = 0;
  
  for (x in s) {
    if (counter > 0)
      s[x] = s[x].toUpperCase() + s[x].toLowerCase().repeat(counter);
    
    counter++;
  }
  
  return s.join('-');
}
