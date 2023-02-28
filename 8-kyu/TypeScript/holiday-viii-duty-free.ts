export function dutyFree(normPrice: number, discount: number, hol: number): number{
  return Math.floor(hol / (normPrice * (discount * .01)));
}
