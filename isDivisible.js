//Function that takes in a number (n) and checks if it is divisible by both other numbers (x , y)

function isDivisible(n, x, y) {
  if(n%x===0  && n%y===0){
    return true
  }else{
    return false
  }
}