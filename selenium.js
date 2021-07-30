const { Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  const driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://localhost:8080')

    const insideVfragElem = await driver.findElement(By.id('1'))
    const outsideVfragElem = await driver.findElement(By.id('ok'))

    async function runDiagnostics(webElement, headerText) {
      console.log(`for element ${headerText} v-frag:`)
      console.log("\tisDisplayed:", await webElement.isDisplayed())
      console.log("\tgetText:", await webElement.getText())
    }

    await runDiagnostics(insideVfragElem, "INSIDE")
    await runDiagnostics(outsideVfragElem, "OUTSIDE")
  } finally {
    await driver.quit();
  }
})();
