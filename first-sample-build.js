const webdriver = require('selenium-webdriver');
async function runTestWithCaps (capabilities) {
  let driver = new webdriver.Builder()
    .usingServer('http://adamtravers_Q07aDi:orBTta7jUttyW8ZUvvXp@hub-cloud.browserstack.com/wd/hub')
    .withCapabilities({
      ...capabilities,
      ...capabilities['browser'] && { browserName: capabilities['browser']}  // Because NodeJS language binding requires browserName to be defined
    })
    .build();
    try {  await driver.get("https://lambdatest.github.io/sample-todo-app/");
    //https://stg-com.lh.uk/

    //edit page
    await driver
      .findElement(By.id("sampletodotext"))
      .sendKeys("kljfkd", Key.RETURN);

    //assert
    let todoText = await driver
      .findElement(By.xpath("//li[last()]"))
      .getText()
      .then(function (value) {
        return value;
      });

    //chai assertion should
    todoText.should.equal("kljfkd");

    await driver.quit();
  } catch (e) {
    await driver.executeScript(
      'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "Some elements failed to load!"}}'
    );
  }
  await driver.quit();
}
const capabilities1 = {
    'bstack:options' : {
        "os": "Windows",
        "osVersion": "10",
        "buildName" : "browserstack-build-1",
        "sessionName" : "Parallel test 1",
    },
    "browserName": "Chrome",
    "browserVersion": "latest",
    }
 const capabilities2 = {
    'bstack:options' : {
        "os": "Windows",
        "osVersion": "10",
        "buildName" : "browserstack-build-1",
        "sessionName" : "Parallel test 2",
    },
    "browserName": "Firefox",
    "browserVersion": "102.0",
    }
const capabilities3 = {
    'bstack:options' : {
        "os": "OS X",
        "osVersion": "Big Sur",
        "buildName" : "browserstack-build-1",
        "sessionName" : "Parallel test 3",
    },
    "browserName": "Safari",
    "browserVersion": "14.1",
    }
runTestWithCaps(capabilities1);
runTestWithCaps(capabilities2);
runTestWithCaps(capabilities3);