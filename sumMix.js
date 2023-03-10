//Function that takes in a mixed array of numbers and strings of numbers and sums all of it. 

function sumMix(x){
  let arr = []
  for(let i=0;i<x.length;i++){
    arr.push(+x[i])
  }
  return arr.reduce((a,b)=>{return a+b})
}