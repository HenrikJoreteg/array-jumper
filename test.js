var assert = require('assert');
var jumper = require('./array-jumper');


var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

// if none specified jumper should return first
assert.equal(jumper(arr), 'b');

// if no jump amount specified jumper should return
// next item in array
assert.equal(jumper(arr, 'a'), 'b');

// if jump amount specified is in range, jump to item
assert.equal(jumper(arr, 'a', 2), 'c');

// should work for negative
assert.equal(jumper(arr, 'c', -2), 'a');

// should work for zero
assert.equal(jumper(arr, 'a', 0), 'a');

// should work for positive numbers that are out of range
assert.equal(jumper(arr, 'a', 10), 'd');

// should work for negative numbers that are out of range
assert.equal(jumper(arr, 'a', -10), 'e');

console.log('passed');
