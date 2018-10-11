// function countApplesAndOranges(s, t, a, b, apples, oranges) {
//     let fruits = {'apples': {
//                                 'fruitDistance' : apples,
//                                 'treeDistance': a },
//                         'oranges': {
//                                 'fruitDistance' : oranges,
//                                 'treeDistance': b }
//                         };

//     // loop over fruits array
//     function landedFruits( current, arr ){
//         let result = []
//         // calculate fruits distance with each fruit
//         for( let fruit of arr.fruitDistance ){
//             let fruitValue = fruits[current].treeDistance + fruit;
//             if( fruitValue >= s && fruitValue <= t ) {
//                 result.push( fruitValue )
//             }
//         }
//         console.log(result.length);
//     }

//     for(let key in fruits ){
//         landedFruits( key, fruits[key] )
//     }
// }


function countApplesAndOranges(s, t, a, b, apple, orange) {
    return [
        apple.map(p => p + a).filter(p => p >= s && p <= t).length,
        orange.map(p => p + b).filter(p => p >= s && p <= t).length
    ]
}


console.log(countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]));

