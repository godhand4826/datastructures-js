const { BinaryIndexTree } = require('./binaryIndexTree.js');

describe('BinaryIndexTree', () => {
	describe('constructor', () => {
		test('fromArray', () => {
			const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
			const t = BinaryIndexTree.fromArray(arr);
			for (let i = 0; i < arr.length; i++) {
				expect(t.query(i) - t.query(i - 1)).toBe(arr[i]);
			}
			expect(t.query(-10)).toBe(0);
			expect(t.query(arr.length - 1)).toBe(55);
		});

		test('new', () => {
			const t = new BinaryIndexTree(10);
			expect(t).not.toBeNull();
			expect(t.query(9)).toBe(0);
		});
	});

	describe('query', () => {
		test('all', () => {
			const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
			const t = BinaryIndexTree.fromArray(arr);
			expect(t.query(10)).toBe(55);
		});

		test('negative index', () => {
			expect(new BinaryIndexTree().query(-1)).toBe(0);
			expect(new BinaryIndexTree().query(-2)).toBe(0);
			expect(new BinaryIndexTree().query(-999)).toBe(0);
		});
	});

	describe('udpate', () => {
		test('update', () => {
			const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
			const t = BinaryIndexTree.fromArray(arr);
			t.update(0, +4);
			t.update(1, +5);
			expect(t.query(10)).toBe(64);
		});
	});
});
