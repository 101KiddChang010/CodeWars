/*

Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000

*/

func past(_ h: Int, _ m: Int, _ s: Int) -> Int {
  let ns = s * 1000
  let nm = m * 60000
  let nh = h * 3600000
  
  return ns + nm + nh 
}
