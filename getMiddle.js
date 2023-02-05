//Function that returns the middle letter or letters of a string. If the string is of a length that is even, the two middle letters are returned. IF the string is of a length that is odd, it returns the middle letter. 

function getMiddle(s){
  let arr = Array.from(s)
  let first = (arr.length/2)-1
  if(arr.length%2===0){
    return `${arr[first]}${arr[arr.length/2]}`
  }else{
    return `${arr[Math.round(arr.length/2)-1]}`
  }
}