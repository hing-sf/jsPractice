// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Option 1
function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

// Option 2
function maxChar(str) {
  let charMap = {};

// Create obj of each charactor with # of time it counted
  for(let char of str){
    charMap[char] = charMap[char] + 1 || 1;
  }
  console.log(charMap)
}

// Option 3
function maxChar(str) {
  let charMap = {};
  let max = 0;
  let maxChar = '';

  // Create obj of each charactor with # of time it counted
  for(let char of str){
    if(!charMap[char]){
      charMap[char] = 1;
    } else {
      charMap[char]++;
    }
  }

  // find which charactor has most repeat
  for(let char in charMap ){
    if(charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
}

module.exports = maxChar;


// function maxChar(str) {
// 	let charMap = {};
// 	let maxCount = 0;
// 	let maxChar = '';

// 	for (let char of str) {
// 		if (!charMap[char]) {
// 			charMap[char] = 1;
// 		} else {
// 			charMap[char]++;
// 		}
// 	}
// 	for (let char in charMap) {
// 		if (charMap[char] > maxCount) {
// 			console.log(charMap[char])
// 			maxCount = charMap[char];
// 			maxChar = char;
// 		}
// 	}
// 	console.log(charMap)
// 	console.log(maxCount)
// 	console.log(maxChar)
// }
