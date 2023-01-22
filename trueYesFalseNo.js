//Function that returns "Yes" for a boolean true or "No" for boolean false

function boolToWord(bool){
  var a = bool.toString()
  if(a==='true'){
    return 'Yes'
  }else{
    return 'No'
  }
  }