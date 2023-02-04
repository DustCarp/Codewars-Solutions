//Function for taking in a number and returning that number with its digits rearranged in descending order. ie: creating the biggest number possible with the number given.  12345 would return 54321

function descendingOrder(n){
  let str = `${n}`
  let split = str.split('')
  let sorted = split.sort(function(a, b){return b-a})
  let joined = sorted.join('')
  return +joined
}