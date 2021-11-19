const {Builder, By} = require('selenium-webdriver');
require('chromedriver');
jasmine.DEFAULT_TIMEOUT_INTERVAL = 50000;

describe("desc", function() {

    
   

    it('Test',async function() {
        let driver = await new Builder().forBrowser('chrome').build();
    //     async function waitTitle() {
    //     const titles = await driver.findElements(By.css('.td-content>h1'));
    //     return !!titles.length;
    // }
        await driver.manage().window().maximize()
        await driver.get('https://chromedriver.chromium.org/home/');
        await driver.sleep(2000);
        // await driver.wait(waitTitle, 5000);
        const title1 = await driver.findElement(By.xpath("//div[@class='tyJCtd mGzaTb baZpAe lkHyyc']//span")); 
        let text = await title1.getText();
        expect(text).toBe('ChromeDriver');
        const headerItems = await driver.findElements(By.xpath("//div[@class='VLoccc K5Zlne QDWEj']//a"));
        await headerItems[2].click();
        await driver.sleep(2000);
        // await driver.wait(waitTitle, 5000);
        const title2 = await driver.findElement(By.xpath(".//*[@class='CDt4Ke zfr3Q JYVBee'][1]//strong"));
        await driver.executeScript('arguments[0].style.backgroundColor = "blue"', title2);
        await driver.sleep(3000);
        await driver.executeScript("window.scrollBy(0,500)");
        await driver.sleep(2000);
        const title3 = await driver.findElement(By.xpath(".//*[@class='CDt4Ke zfr3Q JYVBee'][2]//strong"))
        await driver.executeScript('arguments[0].style.backgroundColor = "green"', title3);
        await driver.sleep(3000);
        await driver.quit();

    });

});


// const {Builder, By} = require('selenium-webdriver');
// require('chromedriver');
// jasmine.DEFAULT_TIMEOUT_INTERVAL = 50000;

// describe("desc", function() {

    
   

//     it('Test',async function() {
//         let driver = await new Builder().forBrowser('chrome').build();
//     //     async function waitTitle() {
//     //     const titles = await driver.findElement(By.css('.td-content>h1'));
//     //     return !!titles.length;
//     // }
//         await driver.manage().window().maximize()
//         await driver.get('https://www.selenium.dev/documentation/webdriver/');
//         await driver.sleep(5000);
//         // await driver.wait(waitTitle, 5000);
//         const title1 = await driver.findElement(By.css('.td-content>h1'));
//         let text = await title1.getText();
//         expect(text).toBe('WebDriver');
//         const headerItems = await driver.findElements(By.css('.navbar-collapse .nav-link'));
//         await headerItems[2].click();
//         await driver.sleep(5000);
//         // await driver.wait(waitTitle, 5000);
//         const title2 = await driver.findElement(By.css('.td-content>h1'));
//         await driver.executeScript('arguments[0].style.backgroundColor = "red"', title2);
//         await driver.sleep(5000);
//         text = await title2.getText();
//         expect(text).toBe('The Selenium Browser Automation Project');
//         await driver.quit();
//     });

// });