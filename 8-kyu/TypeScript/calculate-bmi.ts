export function bmi(weight: number, height: number): string {
  const result: number = weight / (height * height);
  return result <= 18.5 ? "Underweight" : result <= 25 ? "Normal" : result <= 30 ? "Overweight" : "Obese" ;
}
