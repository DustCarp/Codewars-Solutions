//function that returns whether or not a number is a square value. 

var isSquare = function(n){ 
  if(Math.sqrt(n)% 1 === 0){
    return true;
  }
  else
  {
    return false;
  }
}