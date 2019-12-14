const { Then, setDefaultTimeout } = require("cucumber");
const query = require("../utils/query");
// const state = require("../utils/state");
const EC = protractor.ExpectedConditions;
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
// const expect = chai.expect;
chai.should();

setDefaultTimeout(60000);

Then(/^I wait until "(.*)" is visible for "(.*)" seconds$/, function (element, time) {
	return browser.wait(EC.visibilityOf(query.getProtractorElement(element)), time*1000);
});


// Then(/^I wait until "(.*)" is visible for "(.*) seconds"$/, function (element, time) {
//     return browser.wait(EC.visibilityOf(query.getProtractorElement(element)), time*1000)
// });