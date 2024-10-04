import assert from 'assert';
import fizzBuzzReverse from './fizzBuzzReverse';

describe('fizzBuzzReverse', () => {
  it('exports function', () => {
    assert.strictEqual('function', typeof fizzBuzzReverse);
  });

  it('replaces strings with correct number in array and returns the array', () => {
    const arr = [0, 1, 2, 'fizz', 4, 'buzz', 'fizz', 7];
    const expected = [0, 1, 2, 3, 4, 5, 6, 7];
    assert.deepEqual(expected, fizzBuzzReverse(arr));
  });

  it('is mutating original array', () => {
    const arr = ['fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz'];
    const expected = [3, 4, 5, 6, 7, 8, 9];
    fizzBuzzReverse(arr);
    assert.deepEqual(expected, arr);
  });
});
