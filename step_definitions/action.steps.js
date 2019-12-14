const { Given, When, setDefaultTimeout } = require("cucumber");
const EC = protractor.ExpectedConditions;
const query = require("../utils/query");
const state = require("../utils/state");
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;
chai.should();

setDefaultTimeout(30000);

Given(/^I open base URL$/,function() {
	browser.get(browser.baseUrl);
});

Given(/^I logged in RP$/, async function() {
	await browser.get(browser.baseUrl);
	state.setState("Login");
	await browser.wait(EC.visibilityOf(query.getProtractorElement("Right Block -> Login")), 10000);
	await query.getProtractorElement("Right Block -> Login").clear();
	await query.getProtractorElement("Right Block -> Login").sendKeys("default");
	await query.getProtractorElement("Right Block -> Password").clear();
	await query.getProtractorElement("Right Block -> Password").sendKeys("1q2w3e");
	await query.getProtractorElement("Right Block -> Login Button").click();
	await browser.wait(EC.urlContains("launches"), 5000);
	let currUrl = await browser.getCurrentUrl();
	expect(currUrl.includes(state.getUrl())).equal(true);
});

When(/^I should be on "(.*)" page$/, function (page) {
	state.setState(page);
	return browser.wait(EC.urlContains(state.getUrl()), 5000);
});

When(/^I click "(.*)" element$/, function (element) {
	return query.getProtractorElement(element).click();
});

When(/^I clear "(.*)" element$/, function (element) {
	return query.getProtractorElement(element).clear();
});

When(/^I type "(.*)" in "(.*)" element$/, function (text, element) {
	return query.getProtractorElement(element).sendKeys(text);
});

When(/^I wait "(.*)" seconds$/, function (time) {
	return browser.sleep(time*1000);
});