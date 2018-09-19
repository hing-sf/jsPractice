// good to use if multiple piece of data that I need to compare

var firstStr = "anagram";
var secondStr = "anamarg";

console.log(validAnagram(firstStr, secondStr));

function validAnagram(firstStr, secondStr) {
	// 	// create empty object firstStr and secondStr
	let obj = {};

	// before looping
	// check the length of the string, if !== return false
	if (firstStr.length !== secondStr.length) {
		return false;
	}

	// loop over one String
	for (let key of firstStr) {
		// if key does not exist in obj, set value to 1
		// if key exist, add 1 to the value
		obj[key] = obj[key] + 1 || 1;
	}

	// loop over secondStr
	for( let letter of secondStr){
		// if letter is not in obj, return false. this is not an Anagram
		if( !obj[ letter ] ){
			return false;
		}
		// else subtract 1 from key
		else {
			obj[ letter ] -= 1;
		}
	}

	return true;
}



// Option 2
// function validAnagram(firstStr, secondStr) {
// 	// create empty object firstStr and secondStr
// 	let obj = {};
// 	let objsecondStr = {};

// 	// before looping
// 	// check the length of the string, if !== return false
// 	if (firstStr.length !== secondStr.length) {
// 		return false;
// 	}

// 	// loop over each objArr object
// 	for (let key of firstStr) {
// 		// if key does not exist set value to 1
// 		// if key exist, add 1 to the value
// 		obj[key] = obj[key] + 1 || 1;
// 	}

// 	for (let key of secondStr) {
// 		// if key does not exist set value to 1
// 		// if key exist, add 1 to the value
// 		objsecondStr[key] = objsecondStr[key] + 1 || 1;
// 	}

// 	// compare the object to key and value
// 	for (let key in obj) {
// 		// if key from obj does not exist in objsecondStr, return false
// 		if (!(key in objsecondStr)) {
// 			return false;
// 		}
// 		// check if key/value from obj match key/value in objsecondStr
// 		if (obj[key] !== objsecondStr[key]) {
// 			return false;
// 		}
// 	}
// 	console.log(objsecondStr);
// 	// return true outside of loop if all
// 	return true;
// }