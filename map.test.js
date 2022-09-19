const { DefaultMap, PatchMap } = require('./map');

describe('DefaultMap', () => {
	describe('constructor', () => {
		test('new', () => {
			expect(new DefaultMap()).not.toBeNull();
		});
	});

	describe('default', () => {
		test('get/set', () => {
			let m = new DefaultMap();
			expect(m.has('key-1')).toBe(false);
			m.set('key-1', 42);
			expect(m.has('key-1')).toBe(true);
			m.set('key-1', 10);
			expect(m.has('key-2')).toBe(false);
			m.get('key-2');
			expect(m.has('key-1')).toBe(true);
			m.set('key-2', 53);
			expect(m.has('key-1')).toBe(true);
			expect(m.has('key-3')).toBe(false);
			m.get('key-3');
			expect(m.has('key-3')).toBe(true);
			expect(m.size).toBe(3);
		});
	});

	describe('defaultFn', () => {
		test('DefaultMap<Number>.get', () => {
			let m = new DefaultMap(Number);
			expect(m.get('key')).toEqual(0);
			expect(m.size).toBe(1);
		});

		test('DefaultMap<One>.get', () => {
			let m = new DefaultMap(() => 1);
			expect(m.get('key')).toEqual(1);
			expect(m.size).toBe(1);
		});

		test('DefaultMap<Array>.get', () => {
			let m = new DefaultMap(Array);
			expect(m.get('key')).toEqual([]);
			expect(m.size).toBe(1);
		});

		test('DefaultMap<ID>.get', () => {
			function ID() {
				let id = 0;
				return () => ({ id: ++id });
			}
			let m = new DefaultMap(ID());
			expect(m.get('key-1')).toEqual({ id: 1 });
			expect(m.get('key-2')).toEqual({ id: 2 });
			expect(m.size).toBe(2);
		});
	});
});

describe('PatchMap', () => {
	describe('constructor', () => {
		test('new', () => {
			expect(new PatchMap()).not.toBeNull();
		});
	});

	describe('default', () => {
		const m = new PatchMap();
		expect(m.get('key')).toBe(0);
		m.patch('key', +1);
		expect(m.get('key')).toBe(1);
		m.update('key', +2); // make no sence on pre
		expect(m.get('key')).toBe(1);
	});

	describe('patch', () => {
		test('PatchMap<Number>.patch', () => {
			let m = new PatchMap({
				defaultFn: Number,
				patchFn: (a, b) => a + b,
			});
			m.patch('key', +10);
			m.patch('key', -1);
			expect(m.get('key')).toBe(9);
			expect(m.size).toBe(1);
		});

		test('PatchMap<Array>.patch', () => {
			let m = new PatchMap({
				defaultFn: Array,
				patchFn: (arr, val) => [...arr, val],
			});
			m.patch('key', 10);
			m.patch('key', 20);
			m.patch('key', 30);
			expect(m.get('key')).toEqual([10, 20, 30]);
		});
	});
	describe('update', () => {
		test('PatchMap<Array>.update', () => {
			let m = new PatchMap({
				defaultFn: Array,
				updateFn: (arr, val) => arr.push(val),
			});
			m.update('key', 10);
			m.update('key', 20);
			m.update('key', 30);
			expect(m.get('key')).toEqual([10, 20, 30]);
		});
		test('PatchMap<Counter>.update', () => {
			let m = new PatchMap({
				defaultFn: () => ({ count: 0 }),
				updateFn: (counter, delta) => (counter.count += delta),
			});
			m.update('key', 10);
			m.update('key', -15);
			m.update('key', 30);
			expect(m.get('key')).toEqual({ count: 25 });
		});
		test('PatchMap<Object>.update', () => {
			let m = new PatchMap({
				defaultFn: Object,
				updateFn: Object.assign,
			});
			m.update('key', { foo: 1 });
			m.update('key', { bar: 2, baz: 3 });
			m.update('key', { foo: 4 });
			expect(m.get('key')).toEqual({ foo: 4, bar: 2, baz: 3 });
		});
	});
});
