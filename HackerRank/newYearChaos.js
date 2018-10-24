// each person has initial start position
// increment by 1 from 1
// person can bribe person directly in front of them to swap position
// 2 swap, person still wear same sticker. initial postion
// max swap = 2


// write a function that will get the min. # of swap from the swap array

// input is an array
// output integer or string ( Too Chaotic )

function minimumBribes(q) {
    let position = 1;
    let maxMoves = 2;
    let bribes = 0
    let qLen = q.length;
    // loop over input array
    for (let i = 0; i < aLen; i++) {
        let currentValue = q[i];

        // if value > index + 2 return 'Too Chaotic'
        if ( currentValue > i + position + maxMoves) {
            return 'Too Chaotic';
        }
        // if ( currentValue > i + 1) {
        //     bribes += currentValue - ( i + 1 );
        // }
    }

    // bubble sort count how many move to go back to order
    function bubbleSort(){
        let swap ='';
        for(let i = 0; i < qLen; i ++){
            // for(let j = )
        }
    }

    return bribes;
}

// console.log(minimumBribes([1, 4, 2, 3, 5]));
console.log(minimumBribes( [2,1,5,3,4] ))
// console.log(minimumBribes( [1,2,3,4,5] ))