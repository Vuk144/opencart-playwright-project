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
        this.radioNewsletterYes = page.getByLabel("Yes")
        this.radioNewsletterNo = page.getByLabel("No")

    }
    async isRegisterAccountPageDisplayed(): Promise<boolean> {
        await this.page.waitForLoadState('networkidle');
        return await this.registerAccountHeader.isVisible();
    }

    async enterFirstName(stringFirstName: string): Promise<void> {
        await this.firstNameInput.fill(stringFirstName);
    }

    async enterLastName(stringLastName: string): Promise<void> {
        await this.lastNameInput.fill(stringLastName);
    }

    async enterEmail(stringEmail: string): Promise<void> {
        await this.emailInput.fill(stringEmail);
    }

    async enterTelephone(stringTelephone: string): Promise<void> {
        await this.telephoneInput.fill(stringTelephone);
    }

    async enterPassword(stringPassword: string): Promise<void> {
        await this.passwordInput.fill(stringPassword);
    }

    async enterConfirmPassword(stringConfirmPassword: string): Promise<void> {
        await this.confirmPasswordInput.fill(stringConfirmPassword);
    }


    async isAccountCreatedMessageDisplayed(): Promise<boolean> {
        await this.page.waitForLoadState('networkidle');
        return await this.msgAccHasBeenCreated.isVisible();
    }

    async acceptPrivacyPolicy(): Promise<void> {
        await this.checkboxPrivacyPolicy.check();
    }

    async clickContinueButton(): Promise<void> {
        await this.btnContinue.click();
    }

    async selectNewsletterSubscription(subscribe: boolean): Promise<void> {
        if (subscribe) {
            await this.radioNewsletterYes.check();
        } else {
            await this.radioNewsletterNo.check();
        }
    }

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
