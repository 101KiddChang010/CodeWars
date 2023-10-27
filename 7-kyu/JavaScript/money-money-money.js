function calculateYears(principal, interest, tax, desired) {
  let count = 0;
  
  while (principal < desired) {
    let totalInterest = (principal * (interest+1)) - principal;
    let afterTax = totalInterest * (1 - tax);
    
    principal += afterTax;
    count++;
  } 
  
  return count;
}
