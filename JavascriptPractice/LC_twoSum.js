// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

const nums = [2, 7, 11, 15];
const target = 9;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const prevValue = {};

  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    const diffNum = target - currentNumber;
    const index2 = prevValue[diffNum];
    if (index2 != null) {
      return [index2, i];
    } else {
      prevValue[currentNumber] = i;
    }
  }
};

console.log("twoSum(nums, target)", twoSum(nums, target));
