//Function that takes in 3 lengths and tests if they can form a triagnle using the Triangle Inequality Theorem. 

function isTriangle(a,b,c){
  if(a<0 || b<0 || c<0){
    return false
  }else if((a+b)<=c || (a+c)<=b || (b+c)<=a){
    return false
      }else{
      return true
    }
}