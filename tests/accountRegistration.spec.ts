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

    test("TC_1 Verify that user can navigate to registration page @master @sanity @regression", async ({}) => {
         // Description: Verify that user can navigate to the registration page from home page
         // Author: Vuk Nedeljkovic
         // Date: 04.22.2026
        const isHomePageDisplayed = await homePage.isHomePageDisplayed();
        expect(isHomePageDisplayed).toBeTruthy();
        await homePage.clickMyAccountDropdown();
        await homePage.clickRegisterButton();
        const isRegistrationPageDisplayed = await registrationPage.isRegisterAccountPageDisplayed();
        expect(isRegistrationPageDisplayed).toBeTruthy();
        
    });

    test("TC_2 Verify that user can register a new account", async ({}) => {
         // Description: Verify that user can successfully register a new account with valid details
         // Author: Vuk Nedeljkovic
         // Date: 04.22.2026
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


test.describe('Registration Negative Scenarios', () => {
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    registrationPage = new RegistrationPage(page);
    testConfig = new TestConfig();
    await page.goto(testConfig.appUrl);
  });

  test('TC_1 Password mismatch', async ({  }) => {


    const isHomePageDisplayed = await homePage.isHomePageDisplayed();
    expect(isHomePageDisplayed).toBeTruthy();
    await homePage.clickMyAccountDropdown();
    await homePage.clickRegisterButton();
    const isRegistrationPageDisplayed = await registrationPage.isRegisterAccountPageDisplayed();
    expect(isRegistrationPageDisplayed).toBeTruthy();
    await registrationPage.enterFirstName('Test');
    await registrationPage.enterLastName('User');
    await registrationPage.enterEmail(RandomDataUtil.generateRandomEmail());
    await registrationPage.enterTelephone('123456789');
    await registrationPage.enterPassword('Password123');
    await registrationPage.enterConfirmPassword('Password321');
    await registrationPage.acceptPrivacyPolicy();
    await registrationPage.clickContinueButton();
    let isErrorMessageDisplayed = await registrationPage.invalidPasswordConfirmationErrorMessageDisplayed();
    expect(isErrorMessageDisplayed).toBeTruthy();
    //await expect(page.locator('.text-danger')).toContainText('Password confirmation does not match password');
  });


  test('TC_2 Existing email', async ({ }) => {
     // Description: Verify registration fails with an already registered email address
     // Author: Vuk Nedeljkovic
     // Date: 04.22.2026
    const isHomePageDisplayed = await homePage.isHomePageDisplayed();
    expect(isHomePageDisplayed).toBeTruthy();
    await homePage.clickMyAccountDropdown();
    await homePage.clickRegisterButton();
    const isRegistrationPageDisplayed = await registrationPage.isRegisterAccountPageDisplayed();
    expect(isRegistrationPageDisplayed).toBeTruthy();
    await registrationPage.enterFirstName('Test');
    await registrationPage.enterLastName('User');
    await registrationPage.enterEmail(testConfig.email); // existing email from config
    await registrationPage.enterTelephone('123456789');
    await registrationPage.enterPassword('Password123');
    await registrationPage.enterConfirmPassword('Password123');
    await registrationPage.acceptPrivacyPolicy();
    await registrationPage.clickContinueButton();
    let isErrorMessageDisplayed = await registrationPage.emailAddressAlreadyRegistered();
    expect(isErrorMessageDisplayed).toBeTruthy();
  });

  test('TC_3 Invalid phone', async ({ }) => {
     // Description: Verify registration fails with an invalid phone number
     // Author: Vuk Nedeljkovic
     // Date: 04.22.2026
    const isHomePageDisplayed = await homePage.isHomePageDisplayed();
    expect(isHomePageDisplayed).toBeTruthy();
    await homePage.clickMyAccountDropdown();
    await homePage.clickRegisterButton();
    const isRegistrationPageDisplayed = await registrationPage.isRegisterAccountPageDisplayed();
    expect(isRegistrationPageDisplayed).toBeTruthy();
    await registrationPage.enterFirstName('Test');
    await registrationPage.enterLastName('User');
    await registrationPage.enterEmail(RandomDataUtil.generateRandomEmail());
    await registrationPage.enterTelephone('12'); // invalid phone
    await registrationPage.enterPassword('Password123');
    await registrationPage.enterConfirmPassword('Password123');
    await registrationPage.acceptPrivacyPolicy();
    await registrationPage.clickContinueButton();
    let isErrorMessageDisplayed = await registrationPage.invalidTelephoneErrorMessageDisplayed();
    expect(isErrorMessageDisplayed).toBeTruthy();
    
    //const errorText = await registrationPage.textDanger.textContent();
    //expect(errorText).toContain('Telephone must be between');
  });
});
