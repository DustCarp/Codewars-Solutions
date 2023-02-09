//Function that returns the sum of the two smallest numbers within an array of numbers. 

function sumTwoSmallestNumbers(numbers) {  
  let res = numbers.sort((a,b) => a - b).slice(0, 2);
  let ans = res.reduce((a,b)=>a+b)
  return ans
}