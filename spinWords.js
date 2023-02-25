//Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

function spinWords(string){
  let words = string.split(/\s+/)
  let arr = []
  for(let i=0; i<words.length; i++){
    let length=(words[i].split('')).length
    if(length>4){
      arr.push(words[i].split('').reverse('').join(''))
    }else{
      arr.push(words[i])
    }
  }
  return arr.join(' ')
}