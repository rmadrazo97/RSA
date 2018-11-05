var isCoprime = require("is-coprime");

module.exports = function(a, b, c) {
	var coprimes = [];

	if(a > b) {
		a = a + b;
		b = a - b;
		a = a - b;
	}

	while(a <= b) {
		if(isCoprime(a, c)) {
			coprimes.push(a);
		}
		a++;
	}

	return coprimes;
};