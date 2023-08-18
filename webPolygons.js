Polygons are planar (2-D) shapes with all straight sides. Web polygons also called Tree polygons are polygons which can be formed by a peculiar sequencing pattern. It results in the formation of rhombus like polygons on a web.

Each 'n' in the sequence causes 'n' branches, these branches can be closed by the number '1' in the sequence, thus forming polygons!. The branch which is opened recently, will be the first one to close if and only if it gets closed by a '1'.

Task

Count all possible number polygons.

A Sequence of Positive integers (Array) will be provided and the program must return the possible number of polygons (BigInt).

Rules

The number 1 in a sequence has an important function which is to converge any number of branches to 1.

The Web can be completely closed or opened however if '1' is not present after a certain branching value (v>1) then its not possible to form a polygon (example 3)

Assume that the Polygons formed in 2 or more seperate branches do not touch or interfere with one another.

Do NOT consider Polygons to be hollow .i.e Counting a polygon with a hole and without hole is prohibited instead count it as without a hole once. (example 6)


function webPolygons(s) {
  const stack = []
  let level = 0
  for (const n of s){
    if (n > 1) stack.push(BigInt(n))
    else if (stack.length > 1 || stack.length && !Array.isArray(stack[0])){
      let prev = stack.pop()
      let polygons, paths, prevPaths = 1n, prevPolygons = 0n
      if (Array.isArray(prev)){
        [prevPolygons, prevPaths] = prev
        prev = stack.pop()
      }
      polygons = prev * (prev - 1n) / 2n * prevPaths * prevPaths + prevPolygons * prev
      paths = prev * prevPaths
      if (stack.length && Array.isArray(stack[stack.length-1])){
        stack[stack.length-1][0] += polygons
        stack[stack.length-1][1] *= paths
      }else{
        stack.push([polygons, paths])
      }
    }
  }
  let result = 0n, branches = 1n
  for (const n of stack){
    if (Array.isArray(n)) result += branches * n[0]
    else branches *= n
  }
  return result;
}