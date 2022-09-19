const index = require('./index');

test('index', () => {
	expect(index.ArrayStack).toBeDefined();
	expect(index.BinaryIndexTree).toBeDefined();
	expect(index.DefaultMap).toBeDefined();
	expect(index.LinkedListStack).toBeDefined();
	expect(index.MaxHeap).toBeDefined();
	expect(index.PatchMap).toBeDefined();
	expect(index.quickSelect).toBeDefined();
});
