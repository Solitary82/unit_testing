const assert = require('assert');
const distance = require('./distance');

describe('distance', () => {
  describe('flying', () => {
    it('should return distance score', () => {
      const actual = distance('flying', 227.5, 200);

      const expected = 153;

      assert.equal(actual, expected);
    })

    it('should return distance score', () => {
      const actual = distance('flying', 170, 200);

      const expected = 84;

      assert.equal(actual, expected);
    })

    it('should return distance score', () => {
      const actual = distance('flying', 144, 200);

      const expected = 52.8;

      assert.equal(actual, expected);
    })

    it('should return distance score', () => {
      const actual = distance('flying', 156, 200);

      const expected = 67.2;

      assert.equal(actual, expected);
    })
  })
  describe('large', () => {
    it('should return distance score', () => {
      const actual = distance('large', 134, 120);

      const expected = 85.2;

      assert.equal(actual, expected);
    })

    it('should return distance score', () => {
      const actual = distance('large', 119.5, 120);

      const expected = 59.1;

      assert.equal(actual, expected);
    })

    it('should return distance score', () => {
      const actual = distance('large', 117.5, 120);

      const expected = 55.5;

      assert.equal(actual, expected);
    })

    it('should return distance score', () => {
      const actual = distance('large', 0, 120);

      const expected = 0;

      assert.equal(actual, expected);
    })
  })
  describe('normal', () => {
    it('should return distance score', () => {
      const actual = distance('normal', 111, 98);

      const expected = 86;

      assert.equal(actual, expected);
    })

    it('should return distance score', () => {
      const actual = distance('normal', 108, 98);

      const expected = 80;

      assert.equal(actual, expected);
    })

    it('should return distance score', () => {
      const actual = distance('normal', 80, 98);

      const expected = 24;

      assert.equal(actual, expected);
    })

    it('should return distance score', () => {
      const actual = distance('normal', 0, 98);

      const expected = 0;

      assert.equal(actual, expected);
    })
  })
})

