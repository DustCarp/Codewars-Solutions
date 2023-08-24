// How many squares can Chuck Norris cover in a single jump? All of them!

// A grasshopper is jumping forward in a single-axis space represented as an array(list). It can cover p spaces in one jump, where p is any prime number.

// The grasshopper starts any distance before the initial item of the array and finishes any distance after the final item of the array. The grasshopper never jumps backwards.

// Calculate the maximum sum of values of array items the grasshopper can land on while travelling. Since there is no such thing as maximum prime number, it's entirely possible that the grasshopper won't land on any item at all and cover all the distance from start to finish in a single jump.

// The array consists of up to 5 000 items ranging from -100 to +100, so make sure your algorithm is fast enough.

// For your convenience, prime numbers up to 5003 are preloaded as PRIMES.

function primeGrasshoper(arr) {
  dp = [...arr, 0]
  for (let i = arr.length - 1; i >= 0; i--) {
    let x = 0
    for (const p of PRIMES) {
      if (i + p >= arr.length) break
      x = Math.max(x, dp[i + p])
    }
    dp[i] += x
  }
  return Math.max(...dp)
}