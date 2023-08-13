

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
