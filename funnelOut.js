// Imagine a funnel filled with letters. The bottom letter drops out of the funnel and onto a conveyor belt:

//   \b,c/  -->   \b,c/
//    \a/   -->    \ /
//                  a
// -------     -------
// If there are two letters above a gap, the smaller letter falls into the gap.

//   \b,c/   -->   \  c/ 
//    \ /    -->    \b/   
// a            a         
// -------      -------
// Of course, this can create a new gap, which must also be filled in the same way:

//   \f,e,d/  -->  \f, ,d/
//    \  c/   -->   \e,c/ 
//     \b/           \b/   
//    a            a         
//   -------      -------
// Once all the gaps above it have been filled, the bottom letter drops out of the funnel and onto the conveyorbelt. The process continues until all letters have fallen onto the conveyor. (New letters fall onto the end of the existing string)

// KATA GOAL: Return the string on the conveyorbelt after all letters have fallen.

// \f, ,d/      \f, ,d/   --> etc -->    \     /
//  \e,c/        \e,c/    --> etc -->     \   /
//   \b/    -->   \ /     --> etc -->      \ /
// a           a   b                   abcdef
// -------     -------                 -------
// All letters in the funnel will be unique i.e. in every comparison one letter will be strictly smaller than the other. The funnel will be presented as a nested list, e.g:

// [["d","a","c"],
//    ["b","e"],
//      ["f"]]
// The value of a letter is defined by its codepoint. Note: this means all capital letters are defined as smaller than all lower-case letters, but your language's comparison operator will probably treat it that way automatically.

// The funnels will always be "nice" -- every layer will have 1 item more than the layer below, and every layer will be full, and generally there's no funny business or surprises to consider. The only characters used are standard uppercase and lowercase letters A-Z and a-z. The tests go up to 9 layer funnel.

function funnelOut(funnel) {
  let result = '';
  for (let i = 0; i < (1 + funnel.length) * funnel.length / 2; i++) {
    let iIdx = 0;
    result += funnel[funnel.length-1][0];
    
    for (let j = funnel.length-2; j >= 0; j--) {
      if (funnel[j][iIdx] == '' && funnel[j][iIdx + 1] == '') break;
      let jIdx = 0;
      if (funnel[j][iIdx] == '') jIdx = iIdx + 1;
      else if (funnel[j][iIdx + 1] == '' || funnel[j][iIdx] < funnel[j][iIdx + 1]) jIdx = iIdx;
      else jIdx = iIdx + 1;
      funnel[j + 1][iIdx] = funnel[j][jIdx];
      funnel[j][jIdx] = '';      
      iIdx = jIdx;
    }
  }
  return result;
}