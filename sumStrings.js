//Given the string representations of two integers, return the string representation of the sum of those integers.

function sumStrings(a,b) { 
  return (BigInt(a) + BigInt(b)).toString();
}