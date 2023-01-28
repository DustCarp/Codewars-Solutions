//Function for returning the square of each digit in a number and returning each as a concatenated integer.

function squareEachDigit(num){
  return +num.toString().split('').map(i => i*i).join('');
}