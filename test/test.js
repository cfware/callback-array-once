import test from 'ava';

import runCallbacks from '..';

test('exports a function', t => {
	t.is(typeof runCallbacks, 'function');
});

test('first argument must be iterable', t => {
	t.throws(() => runCallbacks());
});

test('empty array', t => {
	t.notThrows(() => runCallbacks([]));
});

test('callback order', t => {
	const track = {
		first: false,
		second: false
	};
	const cbs = [
		() => {
			t.deepEqual(track, {first: false, second: false});
			track.first = true;
		},
		() => {
			t.deepEqual(track, {first: true, second: false});
			track.second = true;
		},
		() => {
			t.deepEqual(track, {first: true, second: true});
		}
	];

	runCallbacks(cbs);
	t.deepEqual(track, {first: true, second: true});
	t.is(cbs.length, 0);
});

test('arguments', t => {
	const cbs = [
		(a, b, c) => {
			t.is(a, 'a');
			t.is(b, 'b');
			t.is(c, 'c');
		}
	];

	runCallbacks(cbs, 'a', 'b', 'c');
});
