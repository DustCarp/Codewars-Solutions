//Function that takes in an array of numbers and strings and returns an array of only the numbers

function filter_list(l) {
  let arr = []
  for(let i=0; i<l.length;i++){
    if(typeof l[i] === 'number'){
      arr.push(l[i])
    }
  }
  return arr
}