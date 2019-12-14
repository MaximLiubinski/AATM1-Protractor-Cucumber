exports.config = {
	framework: "custom",
	frameworkPath: require.resolve("protractor-cucumber-framework"),
	baseUrl: "https://web.demo.reportportal.io/ui/",

	specs: [
		"features/**/*.feature"
	],
	capabilities: {
		browserName: "chrome",
		chromeOptions: {
			args: ["--window-size=1920,1080", "--disable-notifications", "--disable-infobars"]
		}
	},
	onPrepare: function () {
		// browser.waitForAngularEnabled(false);
		browser.ignoreSynchronization = true;
	},

	cucumberOpts: {
		require: [
			"step_definitions/**/*.steps.js"
		]
	}
};