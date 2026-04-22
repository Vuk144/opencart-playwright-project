import {Page, expect, test} from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { MyAccountPage } from '../pages/MyAccountPage';
import { TestConfig } from '../test.config';
import { LoginPage } from '../pages/LoginPage';
import { LogoutPage } from '../pages/LogoutPage';


let testConfig : TestConfig;
let homePage : HomePage;
let myAccountPage : MyAccountPage;
let loginPage : LoginPage;
//let logoutPage : LogoutPage;

test.beforeEach(async ({page}) => {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    myAccountPage = new MyAccountPage(page);
    loginPage = new LoginPage(page);
    //logoutPage = new LogoutPage(page);
    testConfig = new TestConfig();
    
    await page.goto(testConfig.appUrl);
    let isHomePageVisible = await homePage.isHomePageDisplayed();
    expect(isHomePageVisible).toBeTruthy();
});

test.afterEach(async ({page}) => {
    await page.close();
});

test('TC_1 Verify that user can logout successfully @master @regression', async ({}) => {
    // Description: Verify that user can logout successfully from their account
    // Author: Vuk Nedeljkovic
    // Date: 04.22.2026
    // TODO: Add logout test implementation
    await homePage.goToLoginPage();
    let isLoginPageVisible = await loginPage.isLoginPageDisplayed();
    expect(isLoginPageVisible).toBeTruthy();
    await loginPage.login(testConfig.email, testConfig.password);
    let isMyAccountPageVisible = await myAccountPage.isMyAccountPageExists();
    expect(isMyAccountPageVisible).toBeTruthy();
    const logoutPage = await myAccountPage.clickLogout();
    let isLogoutPageVisible = await logoutPage.isContinueButtonVisible();
    expect(isLogoutPageVisible).toBeTruthy();
    await logoutPage.clickContinue();
    let isHomePageVisible = await homePage.isHomePageDisplayed();
    expect(isHomePageVisible).toBeTruthy();
    
});