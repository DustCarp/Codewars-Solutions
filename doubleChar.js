//Function taht takes in a string and returns a string that contains the original string with its characters doubled. 

function doubleChar(str) {
  let arr = []
  for(let i=0; i<str.length; i++){
    arr.push(str[i])
    arr.push(str[i])
  }
  return arr.join('')
}