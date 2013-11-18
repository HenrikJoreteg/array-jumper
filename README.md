# array-jumper

Solves an annoying problem I've run into frequently with various cases where I want to get another item in an array based on some current value that I know is in the array.


## installing

```
npm install array-jumper
```

## how to use

```js
var jumper = require('array-jumper');

// our demo array
var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];


// If non are specified jumper should return first
jumper(arr); // returns 'a'

// If no jump amount specified jumper should return
// next item in array
jumper(arr, 'a') // returns 'b'

// If jump amount specified is in range, jump to item
jumper(arr, 'a', 2) // returns 'c'

// Should work for negative
jumper(arr, 'c', -2) // returns 'a'

// Should work for zero
jumper(arr, 'a', 0) // returns 'a'

// Should loop around if given positive jump number that
// is out of range.
jumper(arr, 'a', 10) // returns 'd'

// Should loop around if given negative jump number that
// is out of range
jumper(arr, 'a', -10) // returns 'e'

// should work for item not found with no jump value
jumper(arr, 'z') // returns 'a'

// should work for item not found with jump value 1
jumper(arr, 'z', 1) // returns 'a'

// should work for item not found with jump value 2
jumper(arr, 'z', 2) // returns 'b'
```


## credits

If you like this, follow [@HenrikJoreteg](http://twitter.com/henrikjoreteg) on twitter.

Check out similar resources at: http://resources.humanjavascript.com.

And check out my book: http://humanjavascript.com


## unit tests? 

run them with `npm test`

read them here: [test.js](test.js)


## changelog

 - 1.0.0: no longer throwing errors, and now handling missing args better
 - 0.0.1: initial release

## license

MIT
