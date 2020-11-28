// https://codereview.stackexchange.com/questions/169133/hackerrank-birthday-cake-candles-and-the-counting-loop

var candles = [4, 3, 2, 6, 5, 6, 6];

function birthdayCakeCandles(ar) {
    const max = Math.max(...ar)
     return ar.filter(x => x === max).length
 }

console.log(birthdayCakeCandles(candles));