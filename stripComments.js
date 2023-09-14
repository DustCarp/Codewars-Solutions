//Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.


function solution(input, markers) {
  return input.split('\n').map(
    line => markers.reduce(
      (line, marker) => line.split(marker)[0].trim(), line
    )
  ).join('\n')
}