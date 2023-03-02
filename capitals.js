//Function that returns an array of the indexs of capital letters from a given string

var capitals = function (word) {
	let arr = [];
  for(let i=0; i<word.length; i++){
  if(word[i]===word[i].toUpperCase()){
    arr.push(i)}};
  return arr;
};