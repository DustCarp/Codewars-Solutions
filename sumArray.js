// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

function sumArray(array) {
   if(array === undefined){
    return 0
    }else if(array === null){
    return 0
  }else if(array.length<3){
    return 0
  }else if(array.length>=3){
    let sort = array.sort((a,b)=> (a-b))
    sort.pop()
    sort.shift()
    return sort.reduce((a,b)=>{return a+b})
  }else{
      return 0
  }
}