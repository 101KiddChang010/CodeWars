export function DNAtoRNA(dna: string): string {
  let rna = dna.split(''), arr: any = [];
  
  rna.forEach(e => {
    switch(e) {
      case 'G':
        arr.push('G');
        break;
      case 'C':
        arr.push('C');
        break;
      case 'A':
        arr.push('A');
        break;
      case 'T':
        arr.push('U');
        break;
    }
  }); 
  
  return arr.join('');
}
