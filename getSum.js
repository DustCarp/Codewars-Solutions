// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

function getSum(a, b){
  let ans = 0;
  if(a<b){
     for(let i=a; i<=b;i++){
       ans+=i};
   }else if(a==b){
     ans += a;
   }else if(a>b){
     for(let i=b; i<= a; i++){
       ans+=i};
   }
  return ans;
}