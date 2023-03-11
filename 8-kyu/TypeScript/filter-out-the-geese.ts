export function gooseFilter (birds: string[]): string[] {
  const geese: string[] = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  for (const e of geese) 
    if (birds.includes(e)) 
      return birds.filter(e => !geese.includes(e))
  return birds;
}
