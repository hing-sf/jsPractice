/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
	if (s.length !== indices.length) return false;
	let obj = {};
	for (let [el, idx] of indices.entries()) {
		console.log(el);
		console.log(idx);
		console.log(obj[indices[idx]]);

		if (!obj[indices[idx]]) {
			console.log(idx);

			obj[indices[el]] = s[el];
		}
	}
	console.log(obj);
};

const result = restoreString('cba', [2, 1, 0]);
console.log('result', result);
	