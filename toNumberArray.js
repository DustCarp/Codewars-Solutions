//Function that takes in an array of string which contains numbers and returns those numbers a snumerical values within an array.

function toNumberArray(stringarray){
  let arr = []
  for(let i=0; i<stringarray.length; i++){
    arr.push(+stringarray[i])
  }
  return arr
}