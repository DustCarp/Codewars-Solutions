//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function take4(n1,n2,n3,n4){
    let first2 = n1*n2
    if(first2<100){
        console.log((first2)+n3+n4)
    }else if(first2>100){
        console.log((first2)-(n3+n4))
    }else if(first2 === 100){
        alert((n1*n2*n3)/n4)
    }
}