/*
Implement the function unique_in_order which takes as argument a sequence and returns a 
list of items without any elements with the same value next to each other and preserving 
the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

var uniqueInOrder=function(iterable){
  let result = [];
  let i = Array.isArray(iterable) ? iterable : iterable.split('');
  
  for (x = 0; x < i.length; x++) {
    if (i[x] === i[x+1]) 
      continue
    result.push(i[x]);
  }
  return result;
}
