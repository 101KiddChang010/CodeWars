/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

function count (string) {  
  let s = string.split(''), obj = {};
  
  if (s.length > 0) {
    if (s.includes('a') && s.includes('b')) {
      obj = {
        a: 0,
        b: 0,
      };
    } 
    else if (s.includes('a')) 
        obj = {a:0};
    else if (s.includes('b')) 
      obj = {b:0};
    
    s.forEach(e => {
      if (e === 'a')
        obj.a += 1;  
      else if (e === 'b')
        obj.b += 1;
    });
  } 
  else
      return obj;
  
  return obj;
}
