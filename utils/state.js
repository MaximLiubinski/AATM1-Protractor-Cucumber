const path = require("path");
const world = require(path.resolve("./pages/world"));

class State {
	constructor() {
		this.state = {};
	}

	setState(pageName) {
		this.state = world[pageName];
	}

	getState() {
		return this.state;
	}

	getUrl() {
		return this.state["urlPart"];
	}

}

module.exports = new State();