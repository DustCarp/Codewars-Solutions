//Function that takes in an array of numbers and returns an array that contains the count of positive numbers and the sum of the negative numbers. For this example, 0 is not counted as positive or negative, and if the array is all 0s or null it should return a blank array. 

function countPositivesSumNegatives(input) {
  let pos = 0
  let neg = 0
   if(input==null){
      return []  
    }else if(input.length>0){
    for(let i=0; i<input.length; i++){
      if(input[i]<0){
        neg += input[i]
    }else if(input[i]>0){
        pos += 1
    }}
    return [pos,neg]
    }else{
    return []
    }
}