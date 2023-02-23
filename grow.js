//Function that takes in an array of numbers and returns the result of multiplying all the numbers together. 

function grow(x){
  return x.reduce((a,b)=>{return a*b})
}