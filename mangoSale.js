//Function for returning the price of mangos given a buy 2 get 1 free sale

function mango(quantity, price){
  return price * (quantity - Math.floor(quantity / 3));
}