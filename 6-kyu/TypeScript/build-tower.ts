export const towerBuilder = (nFloors: number): string[] => {
  let counter = 3, arr = [];
  
  for (let x = nFloors-1; x >= 0; x--) {
    if (x === nFloors-1) 
      arr.push(" ".repeat(x) + "*" + " ".repeat(x));
    else if (x > 0) {
      arr.push(" ".repeat(x) + "*".repeat(counter) + " ".repeat(x));
      counter += 2;
    }
    else 
      arr.push("*".repeat(counter));
  }
  
  return arr;
}
