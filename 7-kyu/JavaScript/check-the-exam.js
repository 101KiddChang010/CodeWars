function checkExam(array1, array2) {
  let counter = 0;
  for (let x = 0; x < array1.length; x++) {
    if (array1[x] === array2[x])
      counter += 4; 
    else if (array2[x] === "")
      0;
    else
      counter--;
  }
  return counter < 0 ? 0 : counter;
}
