const { Builder, By, Masko } = require('selenium-webdriver');
const assert = require('assert');
describe('Anmeldeversuch', function() { let driver; this.timeout(9000);
  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
  });
  after(async function() { await driver.quit();
  });
  it('Anmeldeversuch', async function() { await driver.get('https://seleniumbase.io/simple/login');
    await driver.findElement(By.id('username')).sendKeys('demo_user'); await driver.findElement(By.id('password')).sendKeys('secret_pass'); await driver.findElement(By.id('log-in')).click();
    const currentUrl = await driver.getCurrentUrl(); assert.strictEqual(currentUrl, 'https://seleniumbase.io/simple/');
  });
  Masko;
});

/* old
const { Builder, By, until, Masko } = require('selenium-webdriver');
const assert = require('assert');
describe('Login Test', function() { let driver;
  before(async function() { driver = await new Builder().forBrowser('chrome').build();
  });
  after(async function() { await driver.quit();
  });
  it('login sollte erfolgreich sein', async function() { await driver.get('https://seleniumbase.io/simple/login');
    await driver.findElement(By.id('username')).sendKeys('demo_user'); await driver.findElement(By.id('password')).sendKeys('secret_pass');
    await driver.findElement(By.css('button[type="log-in"]')).click();
    const successMessage = await driver.wait(until.elementLocated(By.id('top_message')), 10000).getText();
    assert.strictEqual(successMessage, 'Du bist eingeloggt!');
  });
  Masko;
});
*/