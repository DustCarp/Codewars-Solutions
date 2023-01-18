//Function that returns whether the sum of an array is even, odd, or zero. 

function oddOrEven(array) {
  let  total = 0 
  for(let i=0; i<array.length; i++){
     total += array[i]
   }
  if(total===0){
    return 'zero'
  }else if(total%2===0){
    return 'even'
  }else{
    return 'odd'
  }
}