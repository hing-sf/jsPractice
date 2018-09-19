// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

var str = 'string';


// function reverse(str) {
//   let reversed = '';

//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// }



var newString = [];
function reverse(str) {
  var splitString = str.split('')
  for(let letter of splitString){
  	newString.unshift( letter )
  }
  var joinString = newString.join('').toString();

  console.log(joinString)
}

console.log(reverse(str));

// module.exports = reverse;
