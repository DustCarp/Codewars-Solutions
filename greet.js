//Function that takes in a name in any case and returns a greeting of "Hello name!" with the first letter of the name capitalized. 

var greet = function(name) {
  let newName = []
  newName.push(name[0].toUpperCase())
  for(let i=1; i<name.length; i++){
    newName.push(name[i].toLowerCase())
  }
  return `Hello ${newName.join('')}!`
};