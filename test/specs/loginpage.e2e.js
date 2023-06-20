import loginPage from "../pageobjects/loginpage.js";
import userHomePage from "../pageobjects/homePageUser.js";

describe ('go to login user', () =>{
    beforeAll('open browser',()=>{
        browser.setWindowSize (1360, 768);
        browser.url("https://www.saucedemo.com/");

        it ('succes process', async() =>{
            await expect (loginPage.loginButton).toBeDisplayed();
            await expect (loginPage.userNameInput).toBeDisplayed();
            await loginPage.loginform("standard_user", "secret_sauce");
            await loginPage.loginButtonClick();
        });

        it ('home page user', async () =>{
            await expect (userHomePage.productsText).toBeDisplayed();
            await expect (userHomePage.buttonBurguer).toBeDisplayed();
            await expect (userHomePage.addToCart).toBeDisplayed();
            await expect (userHomePage.containerInventory).toBeDisplayed();
        });

        it ('go to footer', async () =>{
            await expect (loginPage.footerContain).toBeDisplayed();
            await loginPage.footerFbButton();
            browser.newWindow('https://www.facebook.com/saucelabs');
        });
    });

        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
});

