const LoginPage = require("./login.page.json");
const LaunchesPage = require("./launches.page.json");

class World {
	constructor() {
		this["Login"] = LoginPage;
		this["Launches"] = LaunchesPage;
	}
}

module.exports = new World();