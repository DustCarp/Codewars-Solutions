//Function that takes in a name within a string and returns the initials of the first and last name. 

function abbrevName(name){
	let split = name.split(' ')
	let first = split[0]
	let last = split[1]
	return `${first[0].toUpperCase()}.${last[0].toUpperCase()}`
  }