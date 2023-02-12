//Function that takes in any number, squares each digit of that number, and returns those digits as a new number. 

function squareDigits(num){
  let nums = `${num}`
  let arr = nums.split('')
  let newArr = []
  for(let i=0; i<arr.length; i++){
    newArr.push(Math.pow(arr[i], 2))
  }
  let str = newArr.join('')
  return +str
}