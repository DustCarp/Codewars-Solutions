// Define n!! as

// n!! = 1 * 3 * 5 * ... * n if n is odd,

// n!! = 2 * 4 * 6 * ... * n if n is even.

// Hence 8!! = 2 * 4 * 6 * 8 = 384, there is no zero at the end. 30!! has 3 zeros at the end.

// For a positive integer n, please count how many zeros are there at the end of n!!.

const countZeros=n=>(n+1)%2*((n/10|0)+(n/50|0)+(n/250|0));