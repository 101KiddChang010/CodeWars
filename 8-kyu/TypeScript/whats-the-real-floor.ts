export function getRealFloor(n: number): number {
  return n < 1 ? n : n === 1 ? 0 : n < 13 ? n-1 : n-2 ;
}
