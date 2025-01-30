const { test, expect } = require('@jest/globals');
const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} = require('./index.js');

test('capitalize test 1', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('capitalize test 2', () => {
  expect(capitalize('WORLD')).toBe('WORLD');
});

test('capitalize test 3', () => {
  expect(capitalize('1hello')).toBe('1hello');
});

test('capitalize test 4', () => {
  expect(capitalize('')).toBe('');
});

test('capitalize test 5', () => {
  expect(capitalize('1')).toBe('1');
});

test('reverseString test 1', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('reverseString test 2', () => {
  expect(reverseString('')).toBe('');
});

test('reverseString test 3', () => {
  expect(reverseString('12345')).toBe('54321');
});

test('calculator addition', () => {
  expect(calculator(1, 2, '+')).toBe(3);
});

test('calculator subtraction', () => {
  expect(calculator(5, 3, '-')).toBe(2);
});

test('calculator multiplication', () => {
  expect(calculator(2, 3, '*')).toBe(6);
});

test('calculator division', () => {
  expect(calculator(6, 3, '/')).toBe(2);
});

test('caesarCipher test 1', () => {
  expect(caesarCipher('abc', 1)).toBe('bcd');
});

test('caesarCipher test 2', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('caesarCipher test 3', () => {
  expect(caesarCipher('Hello, World!', 5)).toBe('Mjqqt, Btwqi!');
});

test('analyzeArray test 1', () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});

test('analyzeArray test 2', () => {
  expect(analyzeArray([10, 20, 30, 40, 50])).toEqual({
    average: 30,
    min: 10,
    max: 50,
    length: 5,
  });
});
