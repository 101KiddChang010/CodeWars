export function countPositivesSumNegatives(input: any): any {  
  if (input === null || input.length === 0)
    return [];
  
  input = [...new Set(input)];
  const negatives = input.filter((e: number) => Math.sign(e) === -1);
  const positives = input.filter((e: number) => Math.sign(e) !== -1 && e !== 0).length;
  
  let zero = 0
  negatives.forEach((e: number) => zero += e);
 
  let result = [positives];
  result.push(zero);
  
  
  
  return result;
}
