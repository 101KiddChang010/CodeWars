function  calculateAge(x, y) {
  return y - x === 1 ? "You are 1 year old." : x - y === 1 ? "You will be born in 1 year." : x > y ? `You will be born in ${x-y} years.` : x < y ? `You are ${y-x} years old.` : "You were born this very year!";
}
