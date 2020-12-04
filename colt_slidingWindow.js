const maxSubarraySum = (array, num) => {
	// edge case:
	if (array.length < num) return null;

	let maxSum = 0;
	let tempSum = 0;

	// set initial sum of Num
	for (let i = 0; i < num; i++) {
		maxSum += array[i];
	}

	tempSum = maxSum;
	for (let i = num; i < array.length; i++) {
		// each loop, subtraact first index from last sum and add next index to tempSum
		tempSum = tempSum - array[i - num] + array[i];

		// set the bigger value as maxSum
		maxSum = Math.max(maxSum, tempSum);
	}
	return maxSum;
};

let arr = [1, 2, 5, 4, 1, 10, 6, 8, 6, 7, 3, 5, 18, 8, 9, 0];
let num = 3;

const result = maxSubarraySum(arr, num);

// function maxSubarraySum( arr, num ) {
//     if( num > arr.length ){
//         return null;
//     }
//     var max = -Infinity;
//     for (let i = 0; i < arr.length - num + 1; i++) {
//         temp = 0;
//         for (let j = 0; j < num; j++) {
//             temp += arr[i + j]
//             if(temp > max) {
//                 max = temp;
//             }
//         }
//     }
//     return max;
// }
