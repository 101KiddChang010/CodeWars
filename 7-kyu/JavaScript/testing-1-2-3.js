var number=function(array){
  let counter = 0;
  
  array = array.map(e => {
    return ++counter + ": " + e;
  });
  
  return array;
}
