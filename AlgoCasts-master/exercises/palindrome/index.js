// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false
let str = 'aapipaa'

// option 1
function palindrome(chars) {
	let reversed = [];

	// for(let char of chars){
	// 	reversed = char + reversed;
	// }
	for(let char of chars){
		reversed.unshift(char)
	}
	console.log(reversed.join())

	return reversed.toString === str;
}


// option 2
// function palindrome(chars) {
// 	return str.split('').every((char, i) => {
// 		return char === str[str.length -i -1];
// 	});
// }


console.log(palindrome(str));

// module.exports = palindrome;

