import { expect, test } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { AccountPage } from "../pages/AccountPage";
import { TestConfig } from "../test.config";
import { RandomDataUtil } from "../utils/randomDataGenerator";  


let homePage: HomePage;
let loginPage: LoginPage;
let accountPage: AccountPage;
let testConfig: TestConfig;


test.beforeEach(async ({page}) => {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    accountPage = new AccountPage(page);
    testConfig = new TestConfig();

    await page.waitForLoadState('networkidle');
    await page.goto(testConfig.appUrl);
});

test.describe("Account Login Tests", () => {
    test("TC_1 Verify that user can navigate to login page @master @sanity @regression", async ({}) => {
        // Description: Verify that user can navigate to the login page from home page
        // Author: Vuk Nedeljkovic
        // Date: 04.21.2026
        const isHomePageDisplayed = await homePage.isHomePageDisplayed();
        expect(isHomePageDisplayed).toBeTruthy();
        await homePage.goToLoginPage();
        const isLoginPageDisplayed = await loginPage.isLoginPageDisplayed();
        expect(isLoginPageDisplayed).toBeTruthy();
    });

    test("TC_2 Verify that user can login with valid credentials @master @sanity @regression", async ({}) => {
        // Description: Verify that user can successfully login with valid email and password credentials
        // Author: Vuk Nedeljkovic
        // Date: 04.21.2026
        const isHomePageDisplayed = await homePage.isHomePageDisplayed();
        expect(isHomePageDisplayed).toBeTruthy();
        await homePage.goToLoginPage();
        let isLoginPageDisplayed = await loginPage.isLoginPageDisplayed();
        expect(isLoginPageDisplayed).toBeTruthy();
        await loginPage.login(testConfig.email, testConfig.password);
        const isAccountPageDisplayed = await accountPage.isAccountPageDisplayed();
        expect(isAccountPageDisplayed).toBeTruthy();
        //
    });

    test("TC_3 Verify that user cannot login with invalid credentials @master @sanity @regression", async ({}) => {
        // Description: Verify that user cannot login with invalid email and password credentials
        // Author: Vuk Nedeljkovic
        // Date: 04.21.2026
        const isHomePageDisplayed = await homePage.isHomePageDisplayed();
        expect(isHomePageDisplayed).toBeTruthy();
        await homePage.goToLoginPage();
        let isLoginPageDisplayed = await loginPage.isLoginPageDisplayed();
        expect(isLoginPageDisplayed).toBeTruthy();
        await loginPage.login(RandomDataUtil.generateRandomEmail(), RandomDataUtil.generateRandomPassword());
        const isAccountPageDisplayed = await accountPage.isAccountPageDisplayed();
        expect(isAccountPageDisplayed).toBeFalsy();
    });
});


