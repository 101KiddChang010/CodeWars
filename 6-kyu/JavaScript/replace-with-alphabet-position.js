function alphabetPosition(text) {
  let t = text.toLowerCase().split('').filter(e => isNaN(e)).join(' ');
  
  t = t.replace(/a/g, 1);
  t = t.replace(/b/g, 2);
  t = t.replace(/c/g, 3);
  t = t.replace(/d/g, 4);
  t = t.replace(/e/g, 5);
  t = t.replace(/f/g, 6);
  t = t.replace(/g/g, 7);
  t = t.replace(/h/g, 8);
  t = t.replace(/i/g, 9);
  t = t.replace(/j/g, 10);
  t = t.replace(/k/g, 11);
  t = t.replace(/l/g, 12);
  t = t.replace(/m/g, 13);
  t = t.replace(/n/g, 14);
  t = t.replace(/o/g, 15);
  t = t.replace(/p/g, 16);
  t = t.replace(/q/g, 17);
  t = t.replace(/r/g, 18);
  t = t.replace(/s/g, 19);
  t = t.replace(/t/g, 20);
  t = t.replace(/u/g, 21);
  t = t.replace(/v/g, 22);
  t = t.replace(/w/g, 23);
  t = t.replace(/x/g, 24);
  t = t.replace(/y/g, 25);
  t = t.replace(/z/g, 26);
  
  return t.split(' ').filter(e => e > 0 && e < 28).join(' ');
}
