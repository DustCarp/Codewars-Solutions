//Function that takes in an array and returns the average of the numbers in the array, if the array does not contain anything it returns a 0.

function findAverage(array) {
  if(array.length>0){
    let sum = array.reduce((a,b)=> {return a+b})
    let avg = sum/array.length
    return avg
    }else{
      return 0
    }
}