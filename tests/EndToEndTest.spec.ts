

import { test, expect, Page } from '@playwright/test';
import { RegistrationPage } from '../pages/RegistrationPage';
import { HomePage } from '../pages/HomePage';
import { RandomDataUtil } from '../utils/randomDataGenerator';
import { TestConfig } from '../test.config';
import { LogoutPage } from '../pages/LogoutPage';
import { LoginPage } from '../pages/LoginPage';
import { MyAccountPage } from '../pages/MyAccountPage';
import { SearchResultsPage } from '../pages/SearchResultsPage';
import { ProductPage } from '../pages/ProductPage';
import { ShoppingCartPage } from '../pages/ShoppingCartPage';
import { CheckoutPage } from '../pages/CheckoutPage';


test('execute end-to-end test flow @end-to-end', async ({ page }) => {
    const config = new TestConfig();

    await page.goto(config.appUrl);


    let registeredEmail: string = await performRegistration(page);
    console.log("✔ Registration is completed!");


    await performLogout(page);
    console.log("✔ Logout is completed!");


    await performLogin(page, registeredEmail);
    console.log("✔ Login is completed!");


    await addProductToCart(page);
    console.log("✔ Product added to cart!");


    await verifyShoppingCart(page);
    console.log("✔ Shopping cart verification completed!");


});



async function performRegistration(page: Page): Promise<string> {
    const homePage = new HomePage(page);
    await homePage.goToRegistrationPage();

    const registrationPage = new RegistrationPage(page);

    // Fill in random user details
    await registrationPage.enterFirstName(RandomDataUtil.generateRandomFirstName());
    await registrationPage.enterLastName(RandomDataUtil.generateRandomLastName());

    let email: string = RandomDataUtil.generateRandomEmail();
    await registrationPage.enterEmail(email);
    await registrationPage.enterTelephone(RandomDataUtil.generateRandomTelephone());

    await registrationPage.enterPassword("test123");
    await registrationPage.enterConfirmPassword("test123");

    await registrationPage.acceptPrivacyPolicy();  
    await registrationPage.clickContinueButton();     

    const confirmationMsg = await registrationPage.isAccountCreatedMessageDisplayed();
    expect(confirmationMsg).toBeTruthy();

    return email; 
}



async function performLogout(page: Page) {
    const myAccountPage = new MyAccountPage(page);
    const logoutPage: LogoutPage = await myAccountPage.clickLogout();


    expect(await logoutPage.isContinueButtonVisible()).toBe(true);

    // const homePage = await logoutPage.clickContinue();
    // expect(await homePage.isHomePageDisplayed()).toBe(true);
}



async function performLogin(page: Page, email: string) {
    const config = new TestConfig();
    await page.goto(config.appUrl);  

    const homePage = new HomePage(page);
    await homePage.goToLoginPage();

    const loginPage = new LoginPage(page);
    await loginPage.login(email, "test123");  


    const myAccountPage = new MyAccountPage(page);
    expect(await myAccountPage.isMyAccountPageExists()).toBeTruthy();
}


async function addProductToCart(page: Page) {
    const homePage = new HomePage(page);

    const config = new TestConfig();
    const productName: string = config.productName;
    const productQuantity: string = config.productQuantity;

    await homePage.enterProductName(productName);
    await homePage.clickSearch();  

    const searchResultsPage = new SearchResultsPage(page);

    expect(await searchResultsPage.isSearchResultsPageExists()).toBeTruthy();


    expect(await searchResultsPage.isProductExist(productName)).toBeTruthy();

    
    const productPage = await searchResultsPage.selectProduct(productName);
    await productPage?.setQuantity(productQuantity);
    await productPage?.addToCart();  

    await page.waitForTimeout(3000); 

    // Confirm product was added
    // expect(await productPage?.isConfirmationMessageVisible()).toBe(true);
}


// Function to verify the shopping cart details
async function verifyShoppingCart(page: Page) {
    const productPage = new ProductPage(page);

    // Navigate to shopping cart from product page
    await productPage.clickItemsToNavigateToCart();
    const shoppingCartPage: ShoppingCartPage = await productPage.clickViewCart();

    console.log("🛒 Navigated to shopping cart!");

    const config = new TestConfig();
    
    // Validate that total price is correct (based on config)
    expect(await shoppingCartPage.getTotalPrice()).toBe(config.totalPrice);
}


// Function to perform checkout (disabled for demo site)
async function performCheckout(page: Page) {
    // Checkout feature is not implemented since it's a demo site.
    // Place your checkout flow logic here if backend is available.
}
