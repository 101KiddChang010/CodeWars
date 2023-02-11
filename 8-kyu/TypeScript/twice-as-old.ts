export function twiceAsOld(dadYearsOld: number, sonYearsOld: number): number {
 return sonYearsOld ? Math.abs(dadYearsOld - sonYearsOld * 2) : dadYearsOld;
}
