var numbers = [10, 20, 30];
var sum = 0;

// for (var i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }

// numbers.reduce(function(sum, number){
//     return sum + number;
// }, 0)

// console.log(sum);

var primaryColors = [
    { color: 'red'},
    { color: 'yellow'},
    { color: 'blue'}
]

function colors(arr){
    return arr.reduce(( prev, item )=>{
        prev.push(item.color)
        return prev
    }, [])
}

console.log(colors(primaryColors))
