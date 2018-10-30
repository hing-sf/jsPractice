let array = [1, 2, 3, 4, 5, 6];
let numRotateLeft = 2;

function rotLeft(arr, d) {
    // loop over array and rotate left the # of numRotateLeft
    let tempIdx = '';

    for(let i = 0; i < d; i++){
        // slice provided array and push to array.
        tempIdx = arr.splice(0, 1);
        arr.push( parseInt(tempIdx) );
    }
    return arr;
}

console.log(rotLeft(array, numRotateLeft))