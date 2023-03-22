export function findDifference(a: [number, number, number], b: [number, number, number]): number{
  const asum = a[0] * a[1] * a[2];
  const bsum = b[0] * b[1] * b[2];
  
  return asum > bsum ? asum - bsum: bsum - asum;
}
