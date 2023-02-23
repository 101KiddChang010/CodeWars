export function toAlternatingCase(s: string): string {
  let result = '';
  s.split('').forEach(e => { e == e.toUpperCase() ? result += e.toLowerCase() : result += e.toUpperCase() ;});
  return result;
}
