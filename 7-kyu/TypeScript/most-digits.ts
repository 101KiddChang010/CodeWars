export class Kata {
  static findLongest(array:number[]):number {
    let biggest = 0, index = 0;
    
    array.forEach(e => {
      const curr = e.toString().length-1;
      curr > biggest ? (biggest = curr, index = array.indexOf(e)) : null;
    });
    
    return array[index];
  }
}
