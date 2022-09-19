const { MaxHeap } = require('./maxHeap');

describe('MaxHeap', () => {
	describe('constructor', () => {
		test('new', () => {
			expect(new MaxHeap()).not.toBeNull();
		});
	});

	describe('push/pop', () => {
		test('push/pop', () => {
			const Q = new MaxHeap();
			Q.push(2, 1, 3, 0, 4);
			expect(Q.isEmpty()).toBeFalsy();
			expect(Q.size).toBe(5);
			expect(Q.pop()).toBe(4);
			expect(Q.pop()).toBe(3);
			expect(Q.pop()).toBe(2);
			expect(Q.pop()).toBe(1);
			expect(Q.pop()).toBe(0);
			expect(Q.pop()).toBe(null);
			expect(Q.isEmpty()).toBeTruthy();
		});
	});
});
