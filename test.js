const { Builder, By, Key } = require("selenium-webdriver");
const ltCapabilities = require("./capabilities");
var should = require("chai").should();

//describe block - used to group tests together,
describe("add todo tests", function () {
  var driver;
  //username

  //host
    const GRID_HOST = 'https://adam.travers:3QvTjiaQwdjoXJbYH7y6EospP3nrc1NQ3I24tlqqrhyU6yKxAa@hub.lambdatest.com/wd/hub';


//const driver = driver.Builder().usingServer(gridUrl).withCapabilities(ltCapabilities).build();

  beforeEach(function(){
    driver = new Builder()
    .usingServer(gridUrl)
    .withCapabilities(ltCapabilities.capabilities)
    .forBrowser("chrome").build();
  });

  
  afterEach(async function(){
    await driver.quit
  });


  //it block - represents individual tests (can have many)
  it("succesfully adds a todo application", async function () {
    //launch browser
    //let driver = await new Builder().forBrowser("chrome").build();

    //navigate to application
    await driver.get("https://lambdatest.github.io/sample-todo-app/");
    //https://stg-com.lh.uk/

    //edit page
    await driver
      .findElement(By.id("sampletodotext"))
      .sendKeys("kljflkd", Key.RETURN);

    //assert
    let todoText = await driver
      .findElement(By.xpath("//li[last()]"))
      .getText()
      .then(function (value) {
        return value;
      });

    //chai assertion should
    todoText.should.equal("kljflkd");
    await driver.quit();

    
  });

  it("succesfully adds a todo application", async function () {
    //launch browser
   // let driver = await new Builder().forBrowser("chrome").build();

    //navigate to application
    await driver.get("https://lambdatest.github.io/sample-todo-app/");
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
  });


  
  it("succesfully adds a todo application", async function () {
    //launch browser
   // let driver = await new Builder().forBrowser("chrome").build();

    //navigate to application
    await driver.get("https://lambdatest.github.io/sample-todo-app/");
    //https://stg-com.lh.uk/

    //edit page
    await driver
      .findElement(By.id("sampletodotext"))
      .sendKeys("shcdlkjsa", Key.RETURN);

    //assert
    let todoText = await driver
      .findElement(By.xpath("//li[last()]"))
      .getText()
      .then(function (value) {
        return value;
      });

    //chai assertion should
    todoText.should.equal("shcdlkjsa");
    await driver.quit();
 
 
  });



});
