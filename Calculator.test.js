const expect = require('chai').expect;
const Calculator = require('./Calculator');

describe('Calculator', () => {
	context('#add', () => {
		it('should be true', () => {
			expect(new Calculator().add(1, 1)).to.equal(2);
		});
	});
});
