class Node {
	/**
	 * @param {*} value
	 */
	constructor(value = null) {
		this.value = value;
		this.parent = null;
		this.level = 0;
	}

	find() {
		let node = this;
		while (node.parent != null) {
			node = node.parent;
		}
		return node;
	}

	union(node) {
		const p1 = this.find();
		const p2 = node.find();
		if (p1 == p2) {
			return;
		}
		if (p1.level == p2.level) {
			p2.parent = p1;
			p1.level += 1;
		} else if (p1.level > p2.level) {
			p2.parent = p1;
		} else if (p1.level < p2.level) {
			p1.parent = p2;
		}
	}
}

module.exports = {
	Node,
};
