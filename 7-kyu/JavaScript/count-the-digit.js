function nbDig(n, d) {
  let count = 0;  
  for (let x = 0; x <= n; x++) {
    let temp = (x**2).toString();
     if (temp.includes(d.toString())) {
       temp = temp.split('');
       temp.forEach(e => e.includes(d.toString()) ? count++ : 0);
     }
  }
  return count;
}
