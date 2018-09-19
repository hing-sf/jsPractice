// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt( n ) {
	// reverse integer
	let sign = Math.sign(n);
	let num = n.toString().split('').reverse().join('')

	return parseInt(num) * sign
}

console.log(reverseInt( -9 ));

// module.exports = reverseInt;
