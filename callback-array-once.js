export default function runCallbackArray(list, ...args) {
	list.forEach(fn => {
		fn(...args);
	});
	list.splice(0);
}
