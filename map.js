class DefaultMap extends Map {
	/**
	 * @param {*} defaultFn generate default value when implicitly inserting
	 */
	constructor(defaultFn = Number) {
		super();
		this.defaultFn = defaultFn;
	}

	get(key) {
		// insert default value implicitly when access non exist key
		if (!super.has(key)) {
			super.set(key, this.defaultFn());
		}
		return super.get(key);
	}
}

class PatchMap extends DefaultMap {
	/**
	 * @param {*} config
	 */
	constructor(
		config = {
			defaultFn: Number,
			patchFn: (a, b) => a + b,
			updateFn: (a, b) => {
				// update value in place, make no sense when value is primitive type
				a;
				b;
			},
		}
	) {
		super(config.defaultFn);
		this.patchFn = config.patchFn;
		this.updateFn = config.updateFn;
	}

	patch(key, delta) {
		super.set(key, this.patchFn(super.get(key), delta));
	}

	update(key, value) {
		this.updateFn(super.get(key), value);
	}
}

module.exports = {
	DefaultMap,
	PatchMap,
};
