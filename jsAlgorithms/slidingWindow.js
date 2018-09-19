function maxSubarraySum(arr, num) {
	let maxSum = 0;
	let tempSum = 0;
	if (arr.length < num) return null;
	for (let i = 0; i < num; i++) {
		console.log('first')
		maxSum += arr[i];
	}
	tempSum = maxSum;
	for (let i = num; i < arr.length; i++) {
		console.log('num = ' + num);
		console.log('arr[i] = ' + arr[i]);
		tempSum = tempSum - arr[i - num] + arr[i];
		maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

let arr = [1, 2, 5, 4, 1, 10, 6, 8, 6, 7, 3, 5, 18, 8, 9, 0];
let num = 3;

maxSubarraySum(arr, num)


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
