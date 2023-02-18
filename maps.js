//Function that takes in an array of numbers and returns a new array that contains double the values of the initial array. (Without using map())

function maps(x){
    let arr = []
    for(let i=0; i<x.length; i++){
      arr.push(x[i]*2)
    }
    return arr
  }