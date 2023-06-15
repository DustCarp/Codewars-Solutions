//Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

function squareOrSquareRoot(array) {
  let arr = []
  for(let i=0; i<array.length;i++){
    if(Math.sqrt(array[i])===Math.floor(Math.sqrt(array[i]))){
      arr.push(Math.sqrt(array[i]))
    }else{
      arr.push(Math.pow((array[i]),2))
    }
  }
  return arr;  
}