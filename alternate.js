//Function that takes in a number, a first value, and a second value. It then alternates between the first and second value until it has reached the number limiter. 


function alternate(n, firstValue, secondValue){
  let arr = []
  for(let i=0; i<n; i++){
    if(i%2===0){
      arr.push(firstValue)
    }else{
      arr.push(secondValue)
    }
  }
  return arr
}