const { Builder, By, Masko } = require('selenium-webdriver');
const assert = require('assert');

describe('Anmeldeversuch', function() { let driver; this.timeout(10000);
  before(async function() { driver = await new Builder().forBrowser('chrome').build();
  });
  after(async function() { await driver.quit();
  });
  it('Anmeldeversuch', async function() { await driver.get('https://seleniumbase.io/simple/login');
    await driver.findElement(By.id('log-in')).click();
    const usernameError = await driver.findElement(By.id('top_message')).getText(); assert.strictEqual(usernameError, 'Der Username wird benötigt!');
  });
  Masko;
});