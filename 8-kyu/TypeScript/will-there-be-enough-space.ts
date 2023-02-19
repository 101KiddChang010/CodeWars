export function enough(cap: number, on: number, wait: number): number {
  return wait - (cap - on) < 0 ? 0 : wait - (cap - on);
}
