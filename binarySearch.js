function lowerBound(arr, target) {
	let left = 0;
	let right = arr.length;
	while (left < right) {
		const mid = left + Math.floor((right - left) / 2);
		if (arr[mid] >= target) {
			right = mid;
		} else {
			left = mid + 1;
		}
	}
	return left;
}

function upperBound(arr, target) {
	let left = 0;
	let right = arr.length;
	while (left < right) {
		const mid = left + Math.floor((right - left) / 2);
		if (arr[mid] > target) {
			right = mid;
		} else {
			left = mid + 1;
		}
	}
	return left;
}

module.exports = {
	lowerBound,
	upperBound,
};
