/*
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1

The test cases contain numbers only by mistake.
*/

function correct(string){
  string = string.split('');
  
  for (let x = 0; x < string.length; x++) {
    if (string[x] === '0')
      string[x] = 'O'
    else if (string[x] === '1')
      string[x] = 'I'
    else if (string[x] === '5')
      string[x] = 'S'
  }
  
  return string.join('');
}
