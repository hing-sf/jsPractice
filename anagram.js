// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

const str1 = 'anagramnnnn';
const str2 = 'gramanannnn';
// option 1
const validAnagram = (str1, str2) => {
	if (str1.length !== str2.length) return false;
	const lookup = {};

	for (let i = 0; i < str1.length; i++) {
		let letter = str1[i];
		lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
	}

	for (let i = 0; i < str2.length; i++) {
		let letter = str2[i];
		if (!lookup[letter]) {
			return false;
		} else {
			lookup[letter] = +1;
		}
	}
	return true;
};

// option 2
// const validAnagram = (...args) => {
// 	if (str1.length !== str2.length) return false;
// 	let object = {};

// 	for (const [i, v] of args.entries()) {
// 		object[i] = {};
// 		for (const key of v) {
// 			object[i][key] = object[i][key] + 1 || 1;
// 		}
// 	}

// 	// compare object values
// 	for (const [k, v] of Object.entries(object[0])) {
// 		if (object[0][k] !== object[1][k]) {
// 			return false;
// 		}

// 		if (object[0][v] !== object[1][v]) {
// 			return false;
// 		}
// 	}
// 	return true;
// };

const result = validAnagram(str1, str2);
console.log('result', result);
