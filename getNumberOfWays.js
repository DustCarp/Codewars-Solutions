
//Your task is to write a function which will calculate the total amount of all possible ways that the frog can go from top to the bottom.
const getNumberOfWays = (steps, maxJumpLength) => {
  let n = steps;
  let ways = Array.from({ length: maxJumpLength }, (_, i) => BigInt(2 ** i));
  while (ways.length < n) {
    ways.push(ways.reduce((a, b) => a + b));
    ways.shift();
    n--;
  }
  return ways[n - 1];
}