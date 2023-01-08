/*
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'

NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2!!
*/

function expandedForm(num) {
  let n = num.toString().split('');
  let result = "", arr = [], count = n.length-1;
  n.forEach(e => {
    if (e === 0 ){}
    else {
      result = e;
      arr.push(result+'0'.repeat(count))
      count--;
    }
  })

  const a = [...arr];

  arr.forEach(e => {
    if ((/^0*$/g).test(e))
      a.splice(a.indexOf(e),1);
  })

  return a.join(" + ");
}
