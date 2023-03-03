export const getEvenNumbers = (numbersArray : number[]) : number[] => {
  return numbersArray.filter(e => e % 2 === 0);
}
