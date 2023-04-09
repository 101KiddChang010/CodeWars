function remove (string) {
  return string.split('')[string.length-1].includes('!') ? string.split('').splice(0, string.length-1).join('') : string;
}
