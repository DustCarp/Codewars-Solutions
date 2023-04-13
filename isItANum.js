//Given a string, you must decide whether or not it contains a valid phone number. If it does, return the corrected phone number as a string ie. '02078834982' with no whitespace or special characters, else return "Not a phone number".

function isItANum(str) {
  let nums = str.replace(/[a-z A-Z --!£&\/\\#,+()$~%.^'":*?<>{}/]/gi, '')
  if(nums.length === 11 && nums[0]==='0'){
    return nums
  }else{
    return 'Not a phone number'
  }
}