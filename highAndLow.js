//Function that returns the high and low of a string as a string

function highAndLow(numbers){
    let newArray = numbers.split(' ').map(function(item) {
    return Number(item)
  })
    let max = Math.max(...newArray)
    let min = Math.min(...newArray)       
    return `${max} ${min}`
};