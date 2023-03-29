//Create a method to see whether the string is ALL CAPS.

String.prototype.isUpperCase = function() {
  if(this == this.toUpperCase()){
    return true
  }else{
    return false
  }
}