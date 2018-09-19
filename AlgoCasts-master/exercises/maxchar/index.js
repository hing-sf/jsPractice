// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

let str = "apple turnoverrrr";
var chars = {};

function maxChar( str ) {
	for(let char of str){
		// if(!chars[char]){
		// 	chars[char] = 1;
		// } else {
		// 	chars[char] ++
		// }
		chars[char] = chars[char] + 1 || 1;
	}
	hiChar(chars)
}

function hiChar( obj ){
	let highest = 0;
	let char;
	for(let letter in obj){
		if( obj[letter] > highest ){
			highest = obj[letter];
			char = letter
		}
	}
	return console.log(highest);
}


maxChar(str)

// module.exports = maxChar;