//Function that takes in 2 arrays and sums the contents of both. 

function arrayPlusArray(arr1, arr2) {
  let arr1Sum = arr1.reduce((a,b)=> {return a+b});
  let arr2Sum = arr2.reduce((a,b)=> {return a+b});
  return arr1Sum + arr2Sum;
}