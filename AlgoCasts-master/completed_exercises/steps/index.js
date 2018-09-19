// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps( n ) {

  // n - 1 is the number of dashes after i is complete


  for(let i = 1; i < n; i++){
    // loop n time
    let numberOfDash = n - i;
    let count = 0;
    let row = '';

    // [i] is the number of hash that will be added to the string.
    for(let hash = 1; hash < n; hash++){

      if( hash > count ){
        debugger
        row += `${row}#`
        count++
        console.log(row);
      }
      row += `${row}-`
      // console.log('dash');

    }


  }
}

console.log(steps(5));
// module.exports = steps;

// function steps(n, row = 0, stair = '') {
//   if (n === row) {
//     return;
//   }

//   if (n === stair.length) {
//     console.log(stair);
//     return steps(n, row + 1);
//   }

//   const add = stair.length <= row ? '#' : ' ';
//   steps(n, row, stair + add);
// }

// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = '';
//
//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }
//
//     console.log(stair);
//   }
// }
