export function setAlarm(employed: boolean, vacation: boolean) {
  return (employed) === (vacation) || (employed === false && vacation === true) ? false : true ;
}
