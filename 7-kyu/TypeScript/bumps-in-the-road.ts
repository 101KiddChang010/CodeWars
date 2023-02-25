export function bump(x: string): string{
  return x.split('_').join('').split('').length <= 15 ? "Woohoo!" : "Car Dead";
}
