// ======================================================
// Array must be sorted to work
// Solution Time Comlexity - 0(N^2)
// ======================================================

// function sumZero( arr ) {

//     // loop ove Array
//     for( let i = 0; i < arr.length; i++){

//         // loop over the next index to the end of the Array
//         for ( let j = i+1; j < arr.length; j++ ){
//             // if index of arr1 + arr2 = 0
//             if (arr[i] + arr[j] === 0){
//                 // return value of arr1 and arr2
//                 return [arr[i], arr[j]]
//             }
//         }
//     }
// }

// ======================================================
// ARRAY MUST BE SORTED TO WORK
// Multiple pointers Pattern
// find first match positive number
// Solution Time Comlexity - 0(N )
// Example 1
// ======================================================

var arr = [-4, -3, -2, -1, 0, 1, 2, 5]
sumZero(arr)

// Multiple pointers Pattern
function sumZero( arr ) {
    // create left and right Array pointers
    let left = 0;
    let right = arr.length - 1;
    // loop over array
    while ( left < right ){
        let sum = arr[left] + arr[right];
        // if left + right = 0
        if ( sum === 0 ){
            // return array value
            return [arr[left], arr[right]];
        }
        // if sum is greater than 0, move right pointer down to next index to the left so value decrease
        else if ( sum > 0 ){
            right--;
        }
        // if sum is less than 0, move left pointer up to the next index so value increase
        else {
            left++;
        }
    }
}