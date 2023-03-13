export function toCsvText(array:number[][]):string {
  let result = "";
  
  array.forEach((e,i,a) => {
    e.forEach((el,ind,ar) => {
      ind === ar.length-1 ? result += el : result += el + ',';
    })
    i === a.length-1 ? null : result += '\n';
  });
    
  return result;
}
