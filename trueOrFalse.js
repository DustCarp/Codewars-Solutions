//Function that checks a boolean value, if true it returns a function which returns true. If false, it returns a function which returns false. 

function _if(bool, func1, func2) {
  if (bool == true)
  {
    return func1()
  }
  else return func2()
}