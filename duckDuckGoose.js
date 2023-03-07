//Function that plays duck duck goose taking in an array of names and number of times to go around. 

function duckDuckGoose(players, goose) {
  return players[(goose-1)%players.length].name
}