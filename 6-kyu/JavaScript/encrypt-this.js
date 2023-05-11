var encryptThis = function(text) {
  if (text.length > 1) {
    text = text.split(' ');
    
    return text = text.map(e => e.length === 1 ? e[0].charCodeAt(0).toString() : e[0].charCodeAt(0).toString() + (e.length > 4 ? e[e.length-1] + e.slice(2, e.length-1) + e[1] : e.length === 4 ? e[3] + e[2] + e[1] : e.length === 3 ? e[2] + e[1] : e[1])).join(' ');
  } 
  
  else {
    return text.length === 1 ? text[0].charCodeAt(0).toString() : text[0].charCodeAt(0).toString() + text.length > 4 ? text[text.length-1] + text.slice(2, text.length-1) + text[1] : text.length === 4 ? text[3] + text[2] + text[1] : text.length === 3 ? text[2] + text[1] : text[1];
  }
  
}
