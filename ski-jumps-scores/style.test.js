const assert = require('assert');
const style = require('./style');

describe('style', () => {
  it('should return style score', () => {
    const actual = style([18.0, 18.5, 17.5, 18.5, 18.5]);

    const expected = 55;

    assert.equal(actual, expected);
  })

  it('should return total style score', () => {
    const actual = style([17.5, 17.5, 17.5, 17.0, 17.0]);

    const expected = 52;

    assert.equal(actual, expected);
  })
  it('should return total style score', () => {
    const actual = style([15.5, 16.5, 15.5, 15.5, 16.0]);

    const expected = 47;

    assert.equal(actual, expected);
  })
  it('should return total style score', () => {
    const actual = style([0, 0, 0, 0, 0]);

    const expected = 0;

    assert.equal(actual, expected);
  })
})

