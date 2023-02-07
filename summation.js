//Function that returns the sum of every number before a given number ie: input of 2 returns 3 

var summation = function (num) {
  let sum = 0
  for(let i=0; i<=num; i++){
    sum = sum + i
  }
  return sum
}