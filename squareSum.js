//Function that takes in an array of numbers and gives the sum of the square of each number.

function squareSum(numbers){
  let arr = []
  for(let i=0; i<numbers.length; i++){
    arr.push(Math.pow(numbers[i],2))
  }
  return arr.reduce((a,b)=>{return a+b}, 0)
}