// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

const nums = [2, 7, 11, 15];
const target = 17;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// option 1
var twoSum1 = function (nums, target) {
	var numsMap = {};
	var results = [];
	for (var i = 0; i < nums.length; i++) {
		if (target - nums[i] in numsMap) {
			results[1] = i;
			results[0] = numsMap[target - nums[i]];
			return results;
		}
		console.log('numsMap', numsMap);
		numsMap[nums[i]] = i;
	}
	return results;
};

const option1 = twoSum1(nums, target);
console.log('option1', option1);

var twoSum2 = function (nums, target) {
	const prevValue = {};

	for (let i = 0; i < nums.length; i++) {
		const currentNumber = nums[i];
		console.log('currentNumber', currentNumber);

		const diffNum = target - currentNumber;
		const index2 = prevValue[diffNum];
		if (index2 != null) {
			return [index2, i];
		} else {
			prevValue[currentNumber] = i;
		}
	}
};

const option2 = twoSum2(nums, target);
console.log('option2', option2);
