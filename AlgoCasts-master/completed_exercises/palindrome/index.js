// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  return str.split('').every((char, i) => {
  	console.log('char= ' + char)
  	console.log('str[str.length - i - 1] ' + str[str.length - i - 1])
    return char === str[str.length - i - 1];
  });
}

// let str = 'aapiipaa'
// function palindrome(chars) {
// 	let splitString = chars.split('');
// 	// console.log(splitString)
// 	console.log(even)
// 	let counter = 0;
// 	for( var i = 0; i < chars.length; i++ ){
// 		if( (chars.length % 2) === 0 ){
// 			if( chars[i] === chars[-1]){

// 			}
// 		}
// 	}

// }

console.log(palindrome("apbobpa"))

// module.exports = palindrome;

// function palindrome(str) {
//   const reversed = str
//     .split('')
//     .reverse()
//     .join('');
//
//   return str === reversed;
// }
