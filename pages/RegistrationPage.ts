import { Locator, Page } from "@playwright/test";

export class RegistrationPage {
    private readonly page: Page;
    private readonly registerAccountHeader: Locator;
    private readonly firstNameInput: Locator;
    private readonly lastNameInput: Locator;
    private readonly emailInput: Locator;
    private readonly telephoneInput: Locator;
    private readonly passwordInput: Locator;
    private readonly confirmPasswordInput: Locator;
    private readonly checkboxPrivacyPolicy: Locator;
    private readonly btnContinue: Locator;
    //private readonly radioNewsletterSubscribe: Locator;
    private readonly radioNewsletterYes: Locator;
    private readonly radioNewsletterNo: Locator;
    private readonly msgAccHasBeenCreated: Locator;
    constructor(page: Page) {
        this.page = page;
        this.registerAccountHeader = page.locator("h1");
        this.firstNameInput = page.locator("input[name='firstname']");
        this.lastNameInput = page.locator("input[name='lastname']");
        this.emailInput = page.locator("input[name='email']");
        this.telephoneInput = page.locator("input[name='telephone']");
        this.passwordInput = page.locator("input[name='password']");
        this.confirmPasswordInput = page.locator("input[name='confirm']");
        this.checkboxPrivacyPolicy = page.locator("input[type='checkbox'][name='agree']");
        this.btnContinue = page.locator("input[value='Continue']");
        //this.radioNewsletterNo = page.getByLabel("No");
        //this.radioNewsletterSubscribe = page.locator("input[id='input-newsletter']");
        this.msgAccHasBeenCreated = page.getByText("Your Account Has Been Created!");
        this.radioNewsletterYes = page.getByLabel("Yes");
        this.radioNewsletterNo = page.getByLabel("No");

    }
    /**
     * Verifies if the registration account page is displayed
     * @returns Promise<boolean> - Returns true if register account header is visible
     */
    async isRegisterAccountPageDisplayed(): Promise<boolean> {
        await this.page.waitForLoadState('networkidle');
        return await this.registerAccountHeader.isVisible();
    }

    /**
     * Enters the first name in the registration form
     * @param stringFirstName - The first name to enter
     * @returns Promise<void>
     */
    async enterFirstName(stringFirstName: string): Promise<void> {
        await this.firstNameInput.fill(stringFirstName);
    }

    /**
     * Enters the last name in the registration form
     * @param stringLastName - The last name to enter
     * @returns Promise<void>
     */
    async enterLastName(stringLastName: string): Promise<void> {
        await this.lastNameInput.fill(stringLastName);
    }

    /**
     * Enters the email address in the registration form
     * @param stringEmail - The email address to enter
     * @returns Promise<void>
     */
    async enterEmail(stringEmail: string): Promise<void> {
        await this.emailInput.fill(stringEmail);
    }

    /**
     * Enters the telephone number in the registration form
     * @param stringTelephone - The telephone number to enter
     * @returns Promise<void>
     */
    async enterTelephone(stringTelephone: string): Promise<void> {
        await this.telephoneInput.fill(stringTelephone);
    }

    /**
     * Enters the password in the registration form
     * @param stringPassword - The password to enter
     * @returns Promise<void>
     */
    async enterPassword(stringPassword: string): Promise<void> {
        await this.passwordInput.fill(stringPassword);
    }

    /**
     * Enters the confirm password in the registration form
     * @param stringConfirmPassword - The password confirmation to enter
     * @returns Promise<void>
     */
    async enterConfirmPassword(stringConfirmPassword: string): Promise<void> {
        await this.confirmPasswordInput.fill(stringConfirmPassword);
    }


    /**
     * Checks if the account created success message is displayed
     * @returns Promise<boolean> - Returns true if success message is visible
     */
    async isAccountCreatedMessageDisplayed(): Promise<boolean> {
        await this.page.waitForLoadState('networkidle');
        return await this.msgAccHasBeenCreated.isVisible();
    }

    /**
     * Accepts the privacy policy checkbox
     * @returns Promise<void>
     */
    async acceptPrivacyPolicy(): Promise<void> {
        await this.checkboxPrivacyPolicy.check();
    }

    /**
     * Clicks the Continue button in the registration form
     * @returns Promise<void>
     */
    async clickContinueButton(): Promise<void> {
        await this.btnContinue.click();
    }

    /**
     * Selects newsletter subscription option
     * @param subscribe - True to subscribe to newsletter, false to decline
     * @returns Promise<void>
     */
    async selectNewsletterSubscription(subscribe: boolean): Promise<void> {
        if (subscribe) {
            await this.radioNewsletterYes.check();
        } else {
            await this.radioNewsletterNo.check();
        }
    }

    /**
     * Registers a new user with provided user data
     * @param userData - Object containing user registration details (firstName, lastName, email, telephone, password, subscribeNewsletter)
     * @returns Promise<void>
     */
    async registerNewUser(userData: {
        firstName: string;
        lastName: string;
        email: string;
        telephone: string;
        password: string;
        subscribeNewsletter: boolean;
    }): Promise<void> {
        await this.enterFirstName(userData.firstName);
        await this.enterLastName(userData.lastName);
        await this.enterEmail(userData.email);
        await this.enterTelephone(userData.telephone);
        await this.enterPassword(userData.password);
        await this.enterConfirmPassword(userData.password);
        await this.acceptPrivacyPolicy();
        await this.selectNewsletterSubscription(userData.subscribeNewsletter);
        await this.clickContinueButton();
    }
}
