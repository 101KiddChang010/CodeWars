function shortcut (string) {
  while (string.split('').some(c => ['a','e','i','o','u'].includes(c)))
    string = string.replace(/[aeiou]/,'');
  return string;
}
