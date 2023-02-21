//Function that takes in an array and sums the values of that array. If the array contains nothing, it returns a 0.

function sum(numbers) {
  if(numbers.length===0){
    return 0
  }else{
    return numbers.reduce((a,b)=> {return a+b})
  }    
};