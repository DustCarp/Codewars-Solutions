//When provided with a String, capitalize all vowels

function swap (string) {
  let arr = []
  for(let i=0; i<string.length; i++){
    if(string[i].match(/[aeiou]/gi)){
      arr.push(string[i].toUpperCase())
    }else{
      arr.push(string[i])
    }
  }
  return arr.join('')
}