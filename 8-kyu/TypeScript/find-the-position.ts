export function position(alphabet:string):string {
  let position: {[k: string]: any} = {};
  const a = [...Array(26).keys()].map((n) => String.fromCharCode(97 + n));
  
  let x = 1;
  a.forEach(e => {
    position[e] = x;
    x++;
  });
  
  return "Position of alphabet: " + position[alphabet];
}
