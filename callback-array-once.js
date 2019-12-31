export default function runCallbackArray(list, ...args) {
	for (const fn of list) {
		fn(...args);
	}

	list.splice(0);
}
