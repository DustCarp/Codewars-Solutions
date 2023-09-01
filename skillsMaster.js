// Given a skill tree described as an array and a set of required skills, return the total number of skills needed to learn all of the required skills.

// Intuition: In the example's tree, if I want to learn skill 6, I first need to learn skills 0 and 2 - a total of 3 skills learned.

function countSkills(tree, required) {
  const learned = Array.from({ length: tree.length }, _ => false);
  let count = 0;
  
  required.forEach(skill => {
    while (!learned[skill]) {
      learned[skill] = true;
      skill = tree[skill];
      count++;
    }
  });
  
  return count;
}