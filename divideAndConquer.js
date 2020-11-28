var array = [1,2,3,4,5,6,7,8,9,10];
var val = 6;

function search(array, val) {
    let min = 0;
    let max = array.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        // let currentElement = array[middle];

        console.log(middle)

        if (array[middle] < val) {
            min = middle + 1;
        } else if (array[middle] > val) {
            max = middle - 1;
        } else {
            return middle;
        }
    }
    return -1;
}
// search(array, val)
console.log(search(array, val))