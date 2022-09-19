class BinaryIndexTree {
	constructor(N = 0) {
		this.data = Array(N + 1).fill(0);
	}

	update(i, delta) {
		i += 1;
		while (i < this.data.length) {
			this.data[i] += delta;
			i += lowBit(i);
		}
	}

	query(i) {
		i += 1;
		let sum = 0;
		while (i > 0) {
			sum += this.data[i];
			i -= lowBit(i);
		}
		return sum;
	}

	static fromArray(data) {
		data = [0, ...data];
		for (let i = 1; i < data.length; i++) {
			const p = i + lowBit(i);
			if (p < data.length) {
				data[p] += data[i];
			}
		}
		const t = new BinaryIndexTree();
		t.data = data;
		return t;
	}
}

function lowBit(v) {
	return v & -v;
}

module.exports = {
	BinaryIndexTree,
	lowBit,
};
