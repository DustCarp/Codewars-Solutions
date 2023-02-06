//Function that returns the sum of sheep given an array of boolean "true" or "false" where true represents a present sheep and false represents no sheep. 

function countSheeps(arrayOfSheep) {
  var num = 0
  for(let i=0; i < arrayOfSheep.length; i++){
    if(arrayOfSheep[i]===true){
      num+=1
    }else{
      num += 0
    }
  }
  return num
}