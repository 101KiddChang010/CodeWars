/*

The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.

Examples
  " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
  "    Hello     World   "                  =>  "#HelloWorld"
  ""                                        =>  false

*/

function generateHashtag (str) {
  let newStr = "#";  
  let splitStr = str.split(" ");
  
  for (let x = 0; x < splitStr.length; x++) {
      splitStr[x] = splitStr[x].charAt(0).toUpperCase() + splitStr[x].slice(1);
  }
  let str2 = splitStr.join(" ");
 
  newStr += str2;
  newStr = newStr.replace(/\s/g, "");
  
  if (newStr.length > 140 || str === null || newStr === "#") 
    return false;
  else 
    return newStr;
}
