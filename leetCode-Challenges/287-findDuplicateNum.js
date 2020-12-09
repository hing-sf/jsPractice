// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one duplicate number in nums, return this duplicate number.

// Follow-ups:

// How can we prove that at least one duplicate number must exist in nums?
// Can you solve the problem without modifying the array nums?
// Can you solve the problem using only constant, O(1) extra space?
// Can you solve the problem with runtime complexity less than O(n2)?

// Input: nums = [1,3,4,2,2]
// Output: 2

const nums = [1, 3, 4, 2, 2];
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
	let numMap = {};
	for (const el of nums) {
		console.log('el', el);

		if (!numMap[el]) {
			numMap[el] = 1;
		} else {
			return el;
		}
	}
};
console.log('findDuplicate(nums)', findDuplicate(nums));
