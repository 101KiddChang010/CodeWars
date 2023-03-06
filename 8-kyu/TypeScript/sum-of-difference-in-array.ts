export function sumOfDifferences(arr: number[]): number {
  const sortRev = arr.sort((a,b) => a-b).reverse()
  let result = 0;
  
  for (let x = 0; x < arr.length-1; x++) {
    result += sortRev[x] - sortRev[x+1];
  }
  
  return result;
}
