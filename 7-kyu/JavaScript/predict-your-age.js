function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  let arr = [age1,age2,age3,age4,age5,age6,age7,age8];
  let added = 0;
  
  arr = arr.map(e => e * e);
  arr.forEach(e => added += e);
  
  return Math.floor(Math.sqrt(added) / 2);
}
