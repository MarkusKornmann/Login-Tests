const { Builder, By, Masko } = require('selenium-webdriver');
const assert = require('assert');

describe('Anmeldeversuch', function() { let driver; this.timeout(5000);
  before(async function() { driver = await new Builder().forBrowser('chrome').build();
  });
  after(async function() { await driver.quit();
  });
  it('Anmeldeversuch', async function () {
    await driver.get('https://seleniumbase.io/simple/login');
    await driver.findElement(By.id('username')).sendKeys('dermo_user'); await driver.findElement(By.id('password')).sendKeys('123456'); await driver.findElement(By.id('log-in')).click();
    const error = await driver.findElement(By.id('top_message')).getText(); assert.strictEqual(error, 'Login Name oder Passwort falsch:!');
  });
  Masko;
});

/*  await driver.findElement(By.id('username')).sendKeys('demo_user'); // user richtig
    await driver.findElement(By.id('password')).sendKeys('123456'); // dann kommt invalid password
    await driver.findElement(By.id('log-in')).click();
    const error = await driver.findElement(By.id('top_message')).getText(); assert.strictEqual(error, 'Falscher Login Name oder Passwort falsch:!' */

