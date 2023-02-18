//Function that takes in a number and returns an array of that numbers digits in reverse order. 

function digitize(n){
  let nN = `${n}`
  let split = nN.split('').reverse('')
  let arr = [];
  for(let i=0; i<split.length;i++){
    arr.push(+split[i])
  }
  return arr 
}