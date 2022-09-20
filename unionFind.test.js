const { Node } = require('./unionFind');

describe('unionFind', () => {
	test('find/union', () => {
		const n1 = new Node(1);
		const n2 = new Node(2);
		expect(n1.find()).toBe(n1);
		expect(n2.find()).toBe(n2);
		n1.union(n2);
		expect(n1.find()).toBe(n2.find());
	});
	test('balance', () => {
		const n1 = new Node(1);
		const n2 = new Node(2);
		const n3 = new Node(3);
		const n4 = new Node(4);
		const n5 = new Node(5);
		const n6 = new Node(6);
		const n7 = new Node(7);
		const n8 = new Node(8);
		n1.union(n2);
		n3.union(n4);
		n5.union(n6);
		n7.union(n8);
		n1.union(n3);
		n5.union(n7);
		n1.union(n5);
		expect(n1.find().level).toBe(3);
	});
});
