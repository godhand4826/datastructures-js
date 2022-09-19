const { ArrayStack, Node, LinkedListStack } = require('./stack');

describe('ArrayStack', () => {
	describe('constructor', () => {
		test('new', () => {
			let stack = new ArrayStack();
			expect(stack).not.toBeNull();
			expect(stack.size).toBe(0);
		});
	});

	describe('push/pop', () => {
		test('push/pop', () => {
			let stack = new ArrayStack();
			stack.push(10);
			stack.push(20);
			stack.push(30);
			expect(stack.size).toBe(3);
			expect(stack.pop()).toBe(30);
			expect(stack.size).toBe(2);
			expect(stack.pop()).toBe(20);
			expect(stack.size).toBe(1);
			expect(stack.pop()).toBe(10);
			expect(stack.size).toBe(0);
			expect(stack.pop()).toBe(null);
			expect(stack.size).toBe(0);
		});
	});
});

describe('LinkedListStack', () => {
	describe('Node', () => {
		const node = new Node(42);
		expect(node.value).toBe(42);
		expect(node.next).toBeNull();
	});

	describe('constructor', () => {
		test('new', () => {
			let stack = new LinkedListStack();
			expect(stack).not.toBeNull();
			expect(stack.size).toBe(0);
		});
	});

	describe('push/pop', () => {
		test('push/pop', () => {
			let stack = new LinkedListStack();
			stack.push(10);
			stack.push(20);
			stack.push(30);
			expect(stack.size).toBe(3);
			expect(stack.pop()).toBe(30);
			expect(stack.size).toBe(2);
			expect(stack.pop()).toBe(20);
			expect(stack.size).toBe(1);
			expect(stack.pop()).toBe(10);
			expect(stack.size).toBe(0);
			expect(stack.pop()).toBe(null);
			expect(stack.size).toBe(0);
		});
	});
});
