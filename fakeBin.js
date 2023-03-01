//Function that takes in a string of numbers and returns a new string of numbers containing 1s and 0s. If the original numbers digit is less than 5, a 0 takes its place. If it is equal to or greater than 5 a 1 takes its place. 

function fakeBin(x){
  let arr = []
  for(let i=0; i<x.length; i++){
    if(x[i]<5){
      arr.push('0')
    }else{
      arr.push('1')
    }
  }
  return arr.join('')
}