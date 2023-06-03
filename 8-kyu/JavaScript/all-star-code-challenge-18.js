function strCount(str, letter){  
  return str.split('').filter(e => e === letter).join('').length;
}
