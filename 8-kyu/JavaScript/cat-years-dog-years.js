var humanYearsCatYearsDogYears = function(humanYears) {
  let result = [];
  
  const cat = humanYears >= 3 ? 15 + 9 + ((humanYears-2) * 4) : humanYears === 2 ? 15 + 9 : 15;
  const dog = humanYears >= 3 ? 15 + 9 + ((humanYears-2) * 5) : humanYears === 2 ? 15 + 9 : 15;;
  
  result.push(humanYears, cat, dog);
  
  return result;
}
