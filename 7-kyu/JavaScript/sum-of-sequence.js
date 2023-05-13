const sequenceSum = (begin, end, step) => {
  let result = 0;
  
  for (begin; begin <= end; begin += step)
    result += begin;

  return result;
};
