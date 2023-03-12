//Function which takes in two numbers and an operation and applies the operation to the two values. 

function basicOp(operation, value1, value2){
  if(operation == '*'){
     return value1 * value2
     }else if(operation == '+'){
      return value1 + value2 
      }else if(operation == '-'){
        return value1-value2
      }else if(operation =='/'){
        return value1/value2
      }
}