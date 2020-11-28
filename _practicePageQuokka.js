const str = '23+12+4-5';

const nextNum = (str, i) => {
	const subStr = str.substring(i);
	let next = subStr.match(/\d+/);
	return next[0];
};

const cal = s => {
	let total = 0;
	let firstValue = '';

	for (let i = 0; i < s.length; i++) {
		const val = s[i];

		if (val === '+') {
			if (total === 0) {
				const next = nextNum(s, i);
				total = +next + +firstValue;
				firstValue = '';
			} else {
				const next = nextNum(s, i);
				total = total + +next;
			}
		} else if (val === '-') {
			if (total === 0) {
				const next = nextNum(s, i);
				total = +next - +firstValue;
				firstValue = '';
			} else {
				const next = nextNum(s, i);
				total = total - +next;
			}
		} else {
			firstValue = s.match(/\d+/);
		}
	}
	return total;
};

console.log(cal(str));
