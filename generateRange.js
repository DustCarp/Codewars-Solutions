// Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

// Task
// Implement a function named

function generateRange(min, max, step){
  let times = (max-min)/step
  let arr = []
  for(let i=0; i<=times;i++){
    arr.push(min+(i*step))
  }
  return arr
}