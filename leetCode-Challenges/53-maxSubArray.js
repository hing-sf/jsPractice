// Kadane’s Algorithm — (Dynamic Programming) — How and Why does it Work?
// https://medium.com/@rsinghal757/kadanes-algorithm-dynamic-programming-how-and-why-does-it-work-3fd8849ed73d

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:
// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Follow up:

// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let local_max = 0;
  let global_max = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < nums.length; i++) {
    local_max = Math.max(nums[i], nums[i] + local_max);

    if (local_max > global_max) {
      global_max = local_max;
    }
  }
  return global_max;
};

console.log("maxSubArray: ", maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
