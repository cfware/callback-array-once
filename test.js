import t from 'libtap';

import runCallbacks from '@cfware/callback-array-once';

t.test('exports a function', async t => {
	t.type(runCallbacks, 'function');
});

t.test('first argument must be iterable', async t => {
	t.throws(() => runCallbacks());
});

t.test('empty array', async () => runCallbacks([]));

t.test('callback order', async t => {
	const track = {
		first: false,
		second: false
	};
	const after = () => {};
	const cbs = [
		() => {
			t.same(track, {first: false, second: false});
			track.first = true;
		},
		() => {
			t.same(track, {first: true, second: false});
			track.second = true;
		},
		() => {
			t.same(track, {first: true, second: true});
			cbs.push(after);
		}
	];

	runCallbacks(cbs);
	t.same(track, {first: true, second: true});
	t.equal(cbs.length, 1);
	t.equal(cbs[0], after);
});

t.test('arguments', async t => {
	const cbs = [
		(a, b, c) => {
			t.equal(a, 'a');
			t.equal(b, 'b');
			t.equal(c, 'c');
		}
	];

	runCallbacks(cbs, 'a', 'b', 'c');
});
