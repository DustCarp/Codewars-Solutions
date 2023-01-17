//a function that returns the amount of time passed since midnight in milliseconds given the hours, minutes, and seconds past midnight
function past(h, m, s){
    return h * 3600000 + m * 60000  + s * 1000;
  }