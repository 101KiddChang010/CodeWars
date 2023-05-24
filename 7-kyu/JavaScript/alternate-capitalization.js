function capitalize(s){
  let result = [];
  let odd = "", even = "";
  s.split('').forEach((e,i) => {
    i % 2 === 1 ? odd += e.toLowerCase() : odd += e.toUpperCase();
    i % 2 === 0 ? even += e.toLowerCase() : even += e.toUpperCase();
  });
  
  result.push(odd);
  result.push(even);
  
  return result;
};
