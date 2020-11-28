function balanceBracket(str) {
	const bracketOptions = ['{', '}', '(', ')', '[', ']'];
	let openBrackets = [];

	for (let i = 0; i < str.length; i++) {
		let charIndex = bracketOptions.indexOf(str[i]);
		let isOpenBracket = charIndex % 2 === 0;

		// if open bracket, push to openBraket array
		if (isOpenBracket) {
			openBrackets.push(str[i]);
		}
		// if not open Bracket,
		else if (!isOpenBracket && openBrackets.length > 0) {
			console.log({ char: str[i], isOpenBracket, charIndex });
			const lastOpenChar = openBrackets.pop();
			// check openBrackets to see if last el is matching open brackets
			if (lastOpenChar !== bracketOptions[charIndex - 1]) {
				return false;
			}
		}
		//  else return false
		else {
			return false;
		}
	}

	return true;
}
balanceBracket('{([[}]])}');
