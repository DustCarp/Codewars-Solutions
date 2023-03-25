//Create a function which translates a given DNA string into RNA.

function DNAtoRNA(dna) {
  let arr = []
  for(let i=0; i<dna.length;i++){
    if(dna[i]!=='T'){
      arr.push(dna[i])
    }else if(dna[i]==='T'){
      arr.push('U')
    }
  }
  return arr.join('')
}