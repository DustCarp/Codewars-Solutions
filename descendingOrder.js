//Function that takes in a number and reorganizes the numbers from highest to least to return the largest number possible given the original digits. 

function descendingOrder(n){
  return parseInt(n.toString().split('').sort(function(a, b){
    return b - a;
  }).join(''));
}