export function xo(str: string) : boolean {
  const o = str.toLowerCase().split('').filter(e => /[o]/.test(e));
  const x = str.toLowerCase().split('').filter(e => /[x]/.test(e));
  return o.length === x.length ? true : false;
}
