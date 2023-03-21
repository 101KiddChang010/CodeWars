export function generateShape(int: number): string {
  let res = "";
  
  for (let x = 1; x <= int; x++) {
    x !== int ? res += '+'.repeat(int) + '\n' : res += '+'.repeat(int);
  }
  
  return res;
}
