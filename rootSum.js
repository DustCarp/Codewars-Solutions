// Find the sum of all positive integer roots up to (and including) the nth term of n, whose products are rational positive integers.

// Simple...

// Right?

// Examples:

// function(1) => 1 as (1root 1 = 1);
// function(9) => 12 as (1root 9 = 9) + (2root 9 = 3);
// function(27) => 30 as (1root 27 = 27) + (3root 27 = 3);
// function(64) => 78 as (1root 64 = 64) + (2root 64 = 8) + (3root 64 = 4) + (6root 64 = 2);
// Test Cases:

// Five select test cases (which are visible to you).
// Of the five, the last is the hardest and will test the precision of your floating point values.
// The first 5000 numbers will be tested.
// Finally, 100 randomly generated numbers from 1 to 1,000,000 will be tested.
// Tip:

// Be careful of data types and floating point values

function rootSum(n) {

  let root, pow = 0, sum = 0;
  
  do {
    pow++;
    root = Number(Math.pow(n, 1 / pow).toPrecision(12));

    if (root % 1 === 0 && Math.pow(root, pow) === n) {
      sum += root;
    }
  }
  while (root >= 2);
  
  return sum;

}
