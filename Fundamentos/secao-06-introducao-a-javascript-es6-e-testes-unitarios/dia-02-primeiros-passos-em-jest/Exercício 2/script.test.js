const myFizzBuzz = require('./script');

test('Check if fizzbuzz', () => {
  expect(myFizzBuzz(15)).toEqual('fizzbuzz');
});
test('Check if fizzbuzz', () => {
  expect(myFizzBuzz(3)).toEqual('fizz');
});
test('Check if fizzbuzz', () => {
  expect(myFizzBuzz(5)).toEqual('buzz');
});
test('Check if fizzbuzz', () => {
  expect(myFizzBuzz(2)).toEqual(2);
});
test('Check if fizzbuzz', () => {
  expect(myFizzBuzz('a')).toEqual(false);
});
