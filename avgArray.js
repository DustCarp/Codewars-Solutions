//Function for finding the average of the numbers of an array

function getAverage(nums){
    let total = 0
    for(let i=0; i<nums.length; i++){
      total += nums[i]
    }
    let avg = total/nums.length
    
    return Math.floor(avg)
  }