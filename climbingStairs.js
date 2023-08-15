// A staircase is given with a non-negative cost per each step. Once you pay the cost, you can either climb one or two steps. Create a solution to find the minimum sum of costs to reach the top (finishing the payments including cost[-2] or cost[-1]). You can either start at cost[0] or cost[1].


function climbingStairs(cost) {
  let a = 0, b = 0;
  for (const x of cost) {
    [a, b] = [b, x + Math.min(a, b)];
  }
  return Math.min(a, b);
}