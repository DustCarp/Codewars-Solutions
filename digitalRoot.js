// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

function digitalRoot(n) {
  let str = n.toString().split('')
  let nums = (str.map(Number)).reduce((a,b)=> {return a+b})
  if(nums>=10){
    return digitalRoot(nums)
  }else{
    return nums
  }  
}