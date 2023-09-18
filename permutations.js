// In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.

// Create as many "shufflings" as you can!

function permutations(str) {
 return (str.length <= 1) ? [str] :
         Array.from(new Set(
           str.split('')
              .map((char, i) => permutations(str.substr(0, i) + str.substr(i + 1)).map(p => char + p))
              .reduce((r, x) => r.concat(x), [])
         ));
}