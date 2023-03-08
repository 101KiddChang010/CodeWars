export function countSheep(num: number): string {
  let result: string = "";
  for (let x = 1; x <= num; x++) {
    result += `${x} sheep...`;
  }
  return result;
}
