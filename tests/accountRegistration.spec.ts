import {test, expect} from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { RegistrationPage } from "../pages/RegistrationPage";
import { RandomDataUtil } from "../utils/randomDataGenerator";  
import { TestConfig } from "../test.config";


let homePage: HomePage;
let registrationPage: RegistrationPage;
let testConfig: TestConfig;

test.describe("Account Registration Tests", () => {
    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);
        registrationPage = new RegistrationPage(page);
        testConfig = new TestConfig();
        await page.goto(testConfig.appUrl);
        
    });

    test("TC_01 Verify that user can navigate to registration page @master @sanity @regression", async ({}) => {
        const isHomePageDisplayed = await homePage.isHomePageDisplayed();
        expect(isHomePageDisplayed).toBeTruthy();
        await homePage.clickMyAccountDropdown();
        await homePage.clickRegisterButton();
        // const isRegistrationPageDisplayed = await registrationPage.isRegisterAccountPageDisplayed();
        // expect(isRegistrationPageDisplayed).toBeTruthy();
        
    });

    test("TC_02 Verify that user can register a new account", async ({}) => {
        await homePage.isHomePageDisplayed();
        await homePage.clickMyAccountDropdown();
        await homePage.clickRegisterButton();
        //let isRegistrationPageDisplayed = await registrationPage.isRegisterAccountPageDisplayed();
        //expect(isRegistrationPageDisplayed).toBeTruthy();
        let randomFistName = RandomDataUtil.generateRandomFirstName();
        let randomLastName = RandomDataUtil.generateRandomLastName();
        let randomEmail = RandomDataUtil.generateRandomEmail();
        let randomPassword = RandomDataUtil.generateRandomPassword();
        let randomTelephone = RandomDataUtil.generateRandomTelephone();

        await registrationPage.registerNewUser({
            firstName: randomFistName,
            lastName: randomLastName,
            email: randomEmail,
            telephone: randomTelephone,
            password: randomPassword,
            subscribeNewsletter: true
        });
        // Add assertions to verify successful registration, e.g., check for a success message or redirection to a specific page.

        let boolAccountCreated = await registrationPage.isAccountCreatedMessageDisplayed();
        expect(boolAccountCreated).toBeTruthy();

    });





});