const { lowerBound, upperBound } = require('./binarySearch');

describe('lowerBound', () => {
	test.each`
		arr                   | target | expected
		${[1, 2, 3]}          | ${2}   | ${1}
		${[1, 2, 3]}          | ${2.5} | ${2}
		${[]}                 | ${2}   | ${0}
		${[1, 2, 2, 2, 2, 3]} | ${2}   | ${1}
		${[1, 2, 3]}          | ${-1}  | ${0}
		${[1, 2, 3]}          | ${4}   | ${3}
	`(
		'lowerBound($arr, $target) returns $expected',
		({ arr, target, expected }) =>
			expect(lowerBound(arr, target)).toBe(expected)
	);
});

describe('upperBound', () => {
	test.each`
		arr                   | target | expected
		${[1, 2, 3]}          | ${2}   | ${2}
		${[1, 2, 3]}          | ${2.5} | ${2}
		${[]}                 | ${2}   | ${0}
		${[1, 2, 2, 2, 2, 3]} | ${2}   | ${5}
		${[1, 2, 3]}          | ${-1}  | ${0}
		${[1, 2, 3]}          | ${4}   | ${3}
	`(
		'upperBound($arr, $target) returns $expected',
		({ arr, target, expected }) =>
			expect(upperBound(arr, target)).toBe(expected)
	);
});
