// Two integers are coprimes if the their only greatest common divisor is 1.

// Task
// In this kata you'll be given a number n >= 2 and output a list with all positive integers less than gcd(n, k) == 1, with k being any of the output numbers.

// The list cannot include duplicated entries and has to be sorted.

const coprimes = n => Array.from(Array(n), (_, i) => ++i).filter(e => gcd(n, e) === 1);

const gcd = (a, b) => !b ? a : gcd(b, a % b);