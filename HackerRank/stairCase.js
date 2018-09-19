// // Complete the staircase function below.
// function staircase(n) {

//     // helper method to create string
//     function addChar( loopCount, char ){
//         let row = ''
//         for(let j = 1; j <= loopCount; j++ ){
//             row += char;
//         }
//         return row;
//     }

//     // loop over the n time
//     for(var i = 1; i <= n; i++){
//         // iteration - n = space
//         // n = hash
//         var space = n - i;
//         var hash = n - space;
//         var spaceStr = addChar(space, ' ');
//         var hashStr =  addChar(hash, '#');
//         console.log(spaceStr + hashStr)
//     }
// }

function staircase(n) {

    // loop over the n time
    for(var i = 1; i <= n; i++){
        // iteration - n = space
        // n = hash
        var space = n - i;
        var hash = n - space;

        var spaceStr = '-'.repeat(space);
        var hashStr =  '#'.repeat(hash);
        console.log(spaceStr + hashStr)
    }
}


console.log(staircase(6))