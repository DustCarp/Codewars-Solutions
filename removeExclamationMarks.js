//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  let arr = []
  let split = s.split(' ')
  for(let i=0; i<s.length; i++){
    if(s[i]!== '!'){
      arr.push(s[i])
    }
  }
  return arr.join('')
}