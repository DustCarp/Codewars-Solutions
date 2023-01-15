//Function that multiplies a number by 8 if the number is even and by 9 if the number is odd

function simpleMultiplication(number) {
    if(number%2 === 0){
      return number * 8
    }else{
      return number * 9
    }
}