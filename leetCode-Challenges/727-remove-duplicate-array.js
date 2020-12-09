// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/

function rsdfemoveDuplicates(nums) {
	// loop over array
	// for(let i = 1; i < nums.length; i++){
	// // compare if current idx is same as last idx
	// if(nums[i] === nums[i - 1] ){
	//   nums.shift()
	//   console.log('nums', nums);
	// }
	// // if same, remove last idx
	// }
}
const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
	var start = 0;
	for (var i = 0; i < nums.length; i++) {
		if (nums[start] !== nums[i]) {
			start++;
			nums[start] = nums[i];
		}
	}
	return start + 1;
};

console.log(removeDuplicates(nums));
