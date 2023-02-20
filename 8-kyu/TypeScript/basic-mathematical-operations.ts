export function basicOp(operation: string, value1: number, value2: number): number {
  const o = (value1: number, value2: number): number => {
    switch(operation) {  
      case '+':
        return value1 + value2;
      case '-':
        return value1 - value2;
      case '*':
        return value1 * value2;
      case '/':
        return value1 / value2;
      default:
        return 0;
    }
  }
    
  return o(value1,value2);
}
