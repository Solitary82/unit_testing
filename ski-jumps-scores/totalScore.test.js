const assert = require('assert');
const totalScore = require('./totalScore');

describe('totalScore', () => {
  it('should return total score', () => {
    const actual = totalScore('normal', 111, 98, [19.0, 19.5, 19.0, 19.0, 19.0], -14.4, 3.2);

    const expected = 131.8;

    assert.equal(actual, expected);
  })

  it('should return total score', () => {
    const actual = totalScore('large', 134, 120, [19.0, 20.0, 19.5, 19.0, 18.5], -5.4, 0);

    const expected = 137.3;

    assert.equal(actual, expected);
  })

  it('should return total score', () => {
    const actual = totalScore('flying', 227.5, 200, [18.0, 18.5, 17.5, 18.5, 18.5], -8.4, 8.7);

    const expected = 208.3;

    assert.equal(actual, expected);
  })
})

