//Function that takes in a number and limit and returns all the multiples of that number up to the limit. 

function findMultiples(integer, limit) {
  let arr=[]
  for(let i=integer; i<=limit; i++){
    if(i%integer===0){
      arr.push(i)}
  }
  return arr
}