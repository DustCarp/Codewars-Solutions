//Function that removes vowels from a string 

function disemvowel(str) {
    let arr = str.split("")
         return arr.map(character => {
             if(/[aeiouAEIOU]/.test(character)){
                character = ""
             } else {return character}
         }).join("")
  ;
  }