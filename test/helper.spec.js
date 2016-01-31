const should = require('chai').should();
const expect = require('chai').expect;
const	helper = require('../helper');

const template = [{'JavaScript': 'js'}];

describe('#buildChoices', function() {
  it('returns an array', function() {
		const result = helper.buildChoices(template);
		expect(result).be.a('array');
  });
});

describe('#getSuffix', function() {
  it('returns correct suffix from most popular', function() {
		const result = helper.getSuffix('JavaScript');
		result.should.equal('js');
  });
  it('returns correct suffix from moderately popular', function() {
		const result = helper.getSuffix('CSS');
		result.should.equal('css');
  });
  it('returns correct suffix from most popular', function() {
		const result = helper.getSuffix('assembly');
		result.should.equal('nasm');
  });
});

describe('#isSafeInteger', function() {
  it('returns a boolean', function() {
    const result = helper.isSafeInteger(1);
    expect(result).be.a('boolean');
  });
  it('float returns false', function() {
    const result = helper.isSafeInteger('.1');
    result.should.equal(false);
  });
  it('small int returns true', function() {
    const result = helper.isSafeInteger('9');
    result.should.equal(true);
  });
  it('large int returns false', function() {
    const result = helper.isSafeInteger('999999999');
    result.should.equal(false);
  });
  it('negative int returns false', function() {
    const result = helper.isSafeInteger('-9');
    result.should.equal(false);
  });
  it('0 returns false', function() {
    const result = helper.isSafeInteger('0');
    result.should.equal(false);
  });
});
