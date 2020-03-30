# @cfware/callback-array-once

![Tests][tests-status]
[![Greenkeeper badge][gk-image]](https://greenkeeper.io/)
[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![MIT][license-image]](LICENSE)

Run and clear an array of callbacks.

### Install @cfware/callback-array-once

```sh
npm i --save @cfware/callback-array-once
```

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
[tests-status]: https://github.com/cfware/callback-array-once/workflows/Tests/badge.svg
[gk-image]: https://badges.greenkeeper.io/cfware/callback-array-once.svg
[downloads-image]: https://img.shields.io/npm/dm/@cfware/callback-array-once.svg
[downloads-url]: https://npmjs.org/package/@cfware/callback-array-once
[license-image]: https://img.shields.io/npm/l/@cfware/callback-array-once.svg
