function array(string) {  
  let result;
  
  if (string.includes(','))
    result = string.split(',');
  else
    return null;
  
  if (result.length <= 2)
    return null
  
  result.pop();
  result.shift();
  
  return result.join(' ');
}
