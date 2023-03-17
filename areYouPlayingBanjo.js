//Create a function which answers the question "Are you playing banjo?". If your name starts with the letter "R" or lower case "r", you are playing banjo!

function areYouPlayingBanjo(name) {
  let first = (name.split('')[0])
  if(first.toLowerCase() == 'r'){
    return `${name} plays banjo`
  }else{
    return `${name} does not play banjo`
  }
}