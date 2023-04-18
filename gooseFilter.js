//Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

function gooseFilter(birds) {
  let arr = [];
  var geese = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher'];
  for (let i = 0; i < birds.length; i++) {
    if (!geese.includes(birds[i])) {
      arr.push(birds[i]);
    }
  }
  return arr;
}