//Function that returns the sum of all numbers below a given number which are divisible by 3 or 5. If a number is divisible by both 3 and 5, it is only counted once. 



function solution(number){
  let num = 0
  for(let i = 0; i<number; i++){
    if(i%3===0 || i%5===0){
      num+=i
    }
  }
  return num
}