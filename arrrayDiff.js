//Function that takes in two arrays and searches for repeats between the arrays. It then returns an array of the numbers that do not repeat. 


function arrayDiff(a, b) {
for(let i = a.length - 1; i >= 0; i--){
  for(let j = b.length -1; j>=0; j--){
        if(a[i] == b[j]){
        a.splice(i, 1);}
  }
}
  return a
}