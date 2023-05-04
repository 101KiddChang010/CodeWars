function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  const monthToNum = {
    'january': 1,
    'february': 2,
    'march': 3,
    'april': 4,
    'may': 5,
    'june': 6,
    'july': 7,
    'august': 8,
    'september': 9,
    'october': 10,
    'november': 11,
    'december': 12,
  };
  
  const cMonth = currentDate.split(' ')[0].toLowerCase();
  const eMonth = expirationDate.split(' ')[0].toLowerCase();
  const cDate = currentDate.split(' ')[1].slice(0, -1);
  const eDate = expirationDate.split(' ')[1].slice(0, -1);
  const cYear = currentDate.split(' ')[2];
  const eYear = expirationDate.split(' ')[2];
  
  if (enteredCode === correctCode && cYear <= eYear) {
    if (cYear < eYear) {
      console.log('option 1');
      return true;
    }
    if (monthToNum[cMonth] < monthToNum[eMonth]) {
      console.log('option 2');
      return true;
    }
    if (monthToNum[cMonth] === monthToNum[eMonth])
      if (+cDate <= +eDate) {
        console.log('option 3');
        return true;
      }
  }
  
  return false;
}
