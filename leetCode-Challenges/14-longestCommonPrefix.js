// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

//  Example 1:
// Input: ["flower", "flow", "flight"]
// Output: "fl"

// Example 2:
// Input: ["dog", "racecar", "car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
const arrStr = ["flower", "flow", "floight"];

// find shortest element in array
// loop over shortest element, if shortest is not === to the first elemtent, compare chars.

/**
 * @param {arrray of string }
 * @return {string}
 */
const longestCommonPrefix = arr => {
  let prefix = "";
  // return if empty array
  if (arr.length === 0) return prefix;

  // loop through arr ( str )
  for (let i = 0; i < arr[0].length; i++) {
    const character = arr[0][i];

    for (let j = 0; j < arr.length; j++) {
      if (arr[j][i] !== character) return prefix;
    }
    prefix = prefix + character;
  }
  return prefix;
};

longestCommonPrefix(arrStr);
