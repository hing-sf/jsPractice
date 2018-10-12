// ======================================================
// ARRAY MUST BE SORTED TO WORK
// Multiple pointers Pattern
// count Unique Value
// Example 2
// ======================================================

let arr = [1, 2, 2, 3, 5, 5, 5, 5, 6, 8, 8, 8, 9];

function checkUniqueValue(arr) {
    if( arr.length === 0 ){ return 0}

	// set Pointer 1 index
	var i = 0;

	// loop over array
	for (let j = 1; j < arr.length; j++) {

		// if pointer 1 is not = to pointer 2
		if (arr[i] !== arr[j]) {

			// increase pointer 1 index
            i++;
            arr[i] = arr[j]
		}
        console.log(i, j);
	}

    // return uniqueValue Array
    console.log(arr);
	return i + 1;
}

console.log(checkUniqueValue(arr))