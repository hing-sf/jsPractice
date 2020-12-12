// input ex: arr of nested arr. [[11,2,4], [4,5,6],[10,8,-12]]
function diagonalDifference(arr) {
	// diaTopLeftToRight = add diangonal from top left to bottom right
	// diaTopRightToLeft = add diangonal from top right to bottom left
	var diaTopLeftToRight = [];
	var diaTopRightToLeft = [];
	var rightPosition = arr.length - 1;

	// loop over array
	for (var i = 0; i < arr.length; i++) {
		// push idx 0 to diaTopLeftToRight
		diaTopLeftToRight.push(arr[i][i]);
		// push rightPosition to diaTopRightToLeft
		diaTopRightToLeft.push(arr[i][rightPosition]);
		// move rightPosition 1 index to the left
		rightPosition--;
	}

	// create helper addSum function to add total
	function addSum(outputArr) {
		return outputArr.reduce((prev, item) => {
			return prev + item;
		}, 0);
	}

	return Math.abs(addSum(diaTopLeftToRight) - addSum(diaTopRightToLeft));
}

var arr = [
	[11, 2, 4],
	[4, 5, 6],
	[10, 8, -12]
];
console.log(diagonalDifference(arr));
console.log('');
