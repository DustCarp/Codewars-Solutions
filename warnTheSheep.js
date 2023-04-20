//Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.
//If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.
//Note: there will always be exactly one wolf in the array.

function warnTheSheep(queue) {
let rev = queue.reverse('')
if('wolf' === rev[0]){
  return `Pls go away and stop eating my sheep`
}else{
  return `Oi! Sheep number ${rev.indexOf('wolf')}! You are about to be eaten by a wolf!`
}
}