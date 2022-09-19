class ArrayStack {
	constructor() {
		this.data = [];
	}

	push(value) {
		this.data.push(value);
	}

	pop() {
		return this.data.length > 0 ? this.data.pop() : null;
	}

	get size() {
		return this.data.length;
	}
}

class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

class LinkedListStack {
	constructor() {
		this.size = 0;
		this.top = null;
	}

	push(value) {
		this.top = new Node(value, this.top);
		this.size += 1;
	}

	pop() {
		if (this.size == 0) {
			return null;
		} else {
			const result = this.top.value;
			this.top = this.top.next;
			this.size -= 1;
			return result;
		}
	}
}

module.exports = {
	ArrayStack,
	Node,
	LinkedListStack,
};
