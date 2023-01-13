/*

*/

function sumArray(array) {  
  if (array != null) {
    let low = array[0], high = array[0], total = 0;
  
    array.forEach(e => {
      if (low > e) {
        low = e;
      }
      if (high < e) {
        high = e;
      }
    });
  
    array.splice(array.indexOf(high),1);
    array.splice(array.indexOf(low),1);
    
    array.forEach(e => total += e);
    
    return total;
  }
  
  return 0;
}
