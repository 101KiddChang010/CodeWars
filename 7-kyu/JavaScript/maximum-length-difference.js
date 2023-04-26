function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) 
    return -1;
  
  a1 = a1.map(e => e.length);
  a2 = a2.map(e => e.length);
  
  const s = Math.abs(Math.min(...a1) - Math.max(...a2))
  const l = Math.abs(Math.max(...a1) - Math.min(...a2));
  
  return s > l ? s : l;
}
