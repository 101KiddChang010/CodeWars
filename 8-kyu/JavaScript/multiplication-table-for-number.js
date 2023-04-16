function multiTable(number) {
  let string = "";
  for (let x = 1; x <= 10; x++)
    x === 10 ? string += x + ' * ' + number + " = " + x * number : string += x + ' * ' + number + " = " + x * number + "\n";
  return string;
}
