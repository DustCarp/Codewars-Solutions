// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
  let xNum = (str.toLowerCase().split('x').length-1)
  let oNum = (str.toLowerCase().split('o').length-1)
  if(xNum===oNum){
    return true
  }else{
    return false
  }
}