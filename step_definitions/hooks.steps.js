const { After, Before } = require('cucumber');
const EC = protractor.ExpectedConditions;

After( async function () {
    await  browser.wait(EC.visibilityOf(element(by.css("#topHeader .navbar-right"))), 10000);
    await element(by.css("#topHeader .navbar-right")).click();
    await  browser.wait(EC.visibilityOf(element(by.css("#userNavigator a[href = \"#\"]"))), 10000);
    await element(by.css("#userNavigator a[href = \"#\"]")).click();
});