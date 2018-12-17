// // Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cab" can be written as "-.-.-....-", (which is the concatenation "-.-." + "-..." + ".-"). We'll call such a concatenation, the transformation of a word.

// // Example:
// // Input: words = ["gin", "zen", "gig", "msg"]
// // Output: 2
// // Explanation:
// // The transformation of each word is:
// // "gin" -> "--...-."
// // "zen" -> "--...-."
// // "gig" -> "--...--."
// // "msg" -> "--...--."

// // There are 2 different transformations, "--...-." and "--...--.".

// // The length of words will be at most 100.
// // Each words[i] will have length in range [1, 12].
// // words[i] will only consist of lowercase letters.

// let morseCode = [
// 	'.-',
// 	'-...',
// 	'-.-.',
// 	'-..',
// 	'.',
// 	'..-.',
// 	'--.',
// 	'....',
// 	'..',
// 	'.---',
// 	'-.-',
// 	'.-..',
// 	'--',
// 	'-.',
// 	'---',
// 	'.--.',
// 	'--.-',
// 	'.-.',
// 	'...',
// 	'-',
// 	'..-',
// 	'...-',
// 	'.--',
// 	'-..-',
// 	'-.--',
// 	'--..'
// ];

// let genCharArray = function(charA, charZ) {
// 	var a = [],
// 		i = charA.charCodeAt(0),
// 		j = charZ.charCodeAt(0);
// 	for (; i <= j; ++i) {
// 		a.push(String.fromCharCode(i));
// 	}
// 	return a;
// };
// // let decoded = genCharArray('a', 'z');

// let words = 'abc';

// var uniqueMorseRepresentations = function(words) {
// 	let encodedArray = [];
// 	let decoded = 'abcdefghijklmnopqrstuvwxyz';
// 	let wordLetter = words.split('');

// 	for (let letter of wordLetter) {
// 		let letterIndex = decoded.indexOf(letter);
// 		encodedArray.push(morseCode[letterIndex]);
// 	}

// 	console.log(encodedArray.join(''));
// 	return encodedArray.join('');
// };

// uniqueMorseRepresentations(words);

// Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cab" can be written as "-.-.-....-", (which is the concatenation "-.-." + "-..." + ".-"). We'll call such a concatenation, the transformation of a word.

// Example:
// Input: words = ["gin", "zen", "gig", "msg"]
// Output: 2
// Explanation:
// The transformation of each word is:
// "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."

// There are 2 different transformations, "--...-." and "--...--.".

// The length of words will be at most 100.
// Each words[i] will have length in range [1, 12].
// words[i] will only consist of lowercase letters.

const words = ['ggg', 'zzz', 'iii', 'msg'];
// let words = 'abc';

var uniqueMorseRepresentations = function(words) {
	const decodedChars = 'abcdefghijklmnopqrstuvwxyz';
	const morseCode = [
		'.-',
		'-...',
		'-.-.',
		'-..',
		'.',
		'..-.',
		'--.',
		'....',
		'..',
		'.---',
		'-.-',
		'.-..',
		'--',
		'-.',
		'---',
		'.--.',
		'--.-',
		'.-.',
		'...',
		'-',
		'..-',
		'...-',
		'.--',
		'-..-',
		'-.--',
		'--..'
	];

	let uniqueCode = [];
	words.forEach(word => {
		let encodedWord = '';
		for (let char of word) {
			let charIndex = decodedChars.indexOf(char);
			encodedWord += morseCode[charIndex];
		}

		if (!uniqueCode.includes(encodedWord)) {
			uniqueCode = [...uniqueCode, encodedWord];
		}
	});
	return uniqueCode.length;
};

uniqueMorseRepresentations(words);
