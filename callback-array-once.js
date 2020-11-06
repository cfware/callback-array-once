export default (list, ...args) => {
	for (const fn of list.splice(0)) {
		fn(...args);
	}
};
