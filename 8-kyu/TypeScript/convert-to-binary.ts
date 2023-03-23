export function toBinary(n:number):number {
  let result = "";
  
  while (n !== 0) {
    result += (n % 2).toString();
    n = Math.floor(n / 2);
  }
  
  return +(result.split('').reverse().join(''));
}
