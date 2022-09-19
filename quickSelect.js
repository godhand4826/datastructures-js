function quickSelect(arr, index) {
	if (index < 0 || index >= arr.length) throw Error('index out of bound');
	return select(arr, 0, arr.length, index);
}

function select(arr, left, right, index) {
	/*eslint no-constant-condition: ["error", { "checkLoops": false }]*/
	while (true) {
		const pivot = partition(arr, left, right);
		if (pivot == index) {
			return arr[pivot];
		} else if (pivot > index) {
			right = pivot;
		} /* pivot < index */ else {
			left = pivot + 1;
		}
	}
}

function partition(arr, left, right) {
	let cursor = left;
	for (let j = left; j < right - 1; j++) {
		if (arr[j] <= arr[right - 1]) {
			swap(arr, j, cursor);
			cursor += 1;
		}
	}
	swap(arr, cursor, right - 1);
	return cursor;
}

function swap(arr, i, j) {
	const tmp = arr[i];
	arr[i] = arr[j];
	arr[j] = tmp;
}

module.exports = {
	quickSelect,
};
