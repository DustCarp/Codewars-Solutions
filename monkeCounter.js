//function that takes in a number of monkeys and returns an array containing the numbers from 1 to the stated number of monkeys. 

function monkeyCount(n) {
 var monke = [];
 for(var i=1; i<n+1; i++){
   monke.push(i);
 }
 return monke;
}