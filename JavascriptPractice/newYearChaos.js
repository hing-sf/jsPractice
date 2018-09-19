// every person has initial position
// any person can swap with the person infront of them
// must find min # of swap to put it back to initial state
// each person has max 2 swap

// q: an array of integers
// t: the number of people in the queue

// print Too chaotic if total # of move is > Array.length or if Person inital index - Person final index > 2 ;

let maxBribe = {};
let queue = [2, 1, 5, 3, 4];
// function minimumBribes(q) {
//     let count = 0;
//     let t = q.length;
//     // console.log(t)
//     // use Bubble©sort to sort queue and count each move
//     for(let i = 0; i < t; i++){

//         // if any person exceed 2 max swap
//         console.log(`To Chaotic ${}`)
//     }
// }

function bubbleSort(arr) {
    let count = 0;
    for( let i = 0; i < arr.length; i++ ){
        for ( let j = 0; j < (arr.length - i -1); j++ ){
            // console.log((arr.length - i -1))
            if( arr[j] > arr[j +1] ) {
                count ++
                let lesser = arr[j +1];
                arr[j + 1] = arr[j];
                arr[j] = lesser;
                // console.log(arr)
            }
        }
    }
    // console.log(arr);
    console.log(count)
    return arr

}

bubbleSort(queue)

// minimumBribes(queue)