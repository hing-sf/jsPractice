// period get ignored in localname, example hing.tang === hingtang
// anything after + char in localname get ignored

var numUniqueEmails = function(emails) {
	if (emails.length < 1) return;
	let uniqueEmailAddress = [];

	emails.forEach(email => {
		email = email.split('@');
		let localName = '';
		if (email[0].split('+').length > 1) {
			localName = email[0].split('+')[0].replace(new RegExp(/\./, 'g'), '');
		} else {
			localName = email[0].replace(new RegExp(/\./, 'g'), '');
		}

		if (!uniqueEmailAddress.includes(`${localName}@${email[1]}`)) {
			uniqueEmailAddress = [...uniqueEmailAddress, `${localName}@${email[1]}`];
		}
	});
	return uniqueEmailAddress.length;
};

numUniqueEmails([
	'test.email+alex@leetcode.com',
	'test.e.mail+bob.cathy@leetcode.com',
	'testemail+david@lee.tcode.com'
]);
