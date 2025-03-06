function solution(str, ending){
  // TODO: complete
  return str.slice(str.length - ending.length, str.length) === ending ? true : false;
}
