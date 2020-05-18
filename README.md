# @cfware/callback-array-once [![NPM Version][npm-image]][npm-url]

Run and clear an array of callbacks.

## Usage

```js
import runCallbacks from '@cfware/callback-array-once';

const cbs = [
	(arg1, arg2) => {
		console.log(arg1, arg2);
	},
	(arg1, arg2) => {
		console.log(arg1 + 1, arg2 + 1);
	}
];

runCallbacks(cbs, 1, 2);
console.log(cbs.length);
/* Prints:
 *   1 2
 *   2 3
 *   0
 */
```

[npm-image]: https://img.shields.io/npm/v/@cfware/callback-array-once.svg
[npm-url]: https://npmjs.org/package/@cfware/callback-array-once
