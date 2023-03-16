//Simple, given a string of words, return the length of the shortest word(s).
//String will never be empty and you do not need to account for different data types.

function findShort(s){
  let strToArr = s.split(' ')
  let arr = []
  for(let i=0; i<strToArr.length; i++){
    arr.push((strToArr[i].length))
  }
  let sort = arr.sort((a,b)=>{return a-b})
  return sort[0]
}