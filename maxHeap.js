class MaxHeap {
	constructor() {
		this.data = [];
	}

	push(...values) {
		for (const value of values) {
			this.data.push(value);
			this._up(this.data.length - 1);
		}
	}

	pop() {
		if (this.isEmpty()) {
			return null;
		}
		const result = this.data[0];
		this.data[0] = this.data[this.data.length - 1];
		this.data.pop();
		this._down(0);
		return result;
	}

	isEmpty() {
		return this.data.length === 0;
	}

	_up(index) {
		let parent = Math.floor((index - 1) / 2);
		while (index != 0 && this.data[index] > this.data[parent]) {
			const tmp = this.data[index];
			this.data[index] = this.data[parent];
			this.data[parent] = tmp;

			index = parent;
			parent = Math.floor((index - 1) / 2);
		}
	}

	_down(index) {
		let left = index * 2 + 1;
		let right = left + 1;

		while (
			index < this.data.length &&
			(left < this.data.length || right < this.data.length)
		) {
			let v = this.data[index];
			let lv = this.data[left];
			let rv = this.data[right];
			let max = v;
			let maxIndex = index;
			if (lv > max) {
				max = lv;
				maxIndex = left;
			}
			if (rv > max) {
				max = rv;
				maxIndex = right;
			}
			if (maxIndex === index) {
				return;
			}
			const tmp = this.data[index];
			this.data[index] = this.data[maxIndex];
			this.data[maxIndex] = tmp;

			index = maxIndex;
			left = index * 2 + 1;
			right = left + 1;
		}
	}

	get size() {
		return this.data.length;
	}
}

module.exports = {
	MaxHeap,
};
