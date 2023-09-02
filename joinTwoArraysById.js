// Write a function joinArraysById in JavaScript that takes two arrays, arr1 and arr2, as input. Each array contains objects that have an id field with an integer value. The function should merge arr1 and arr2 based on their id key and return a new array, joinedArray, as the result.

// The joinedArray should be formed by following these rules:

// The length of joinedArray should be equal to the length of unique id values from both arrays combined.
// The objects with unique id values from arr1 and arr2 should be included in the joinedArray without modification.
// If two objects share the same id, their properties should be merged into a single object:
// If a key only exists in one object, include that key-value pair in the merged object.
// If a key exists in both objects, the value from arr2 should override the value from arr1.
// The joinedArray should be sorted in ascending order based on the id key.

function joinArraysById(arr1, arr2) {
  const mergedObj = {}
  arr1.forEach(a => mergedObj[a.id] = a)
  arr2.forEach(a => mergedObj[a.id] = {...mergedObj[a.id], ...a})
  return Object.values(mergedObj)
}