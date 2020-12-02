// Given a sorted array, remove the duplicates in-place such that each element appear only once and return the new length.
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// Example
// Given nums = [1,1,2],
// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
// It doesn't matter what you leave beyond the new length.

var nums = [1, 1, 2];
// var myArray = ['a', 1, 'a', 2, '1'];
const myArray = ['ab', 'string', 'e33h', 'd1', 'ab', 'e2', 'e33', 'd2'];

// Option 1
var removeDuplicates = function (nums) {
	var sortedArray = nums.sort();
	var len = sortedArray.length - 1;
	var newArr = [];

	if (len >= 0) {
		for (var i = 0; i < len; i++) {
			if (sortedArray[i] !== sortedArray[i + 1]) {
				newArr.push(sortedArray[i]);
			}
		}
		newArr.push(sortedArray[len]);
	}
	return newArr;
};

console.log(removeDuplicates(myArray));

// Option 2
var option2 = myArray.filter((value, idx, arr) => arr.indexOf(value) === idx);

console.log(option2); // unique is ['a', 1, 2, '1']

// Option 3
let option3 = [...new Set(myArray)];
console.log(option3); // unique is ['a', 1, 2, '1']
