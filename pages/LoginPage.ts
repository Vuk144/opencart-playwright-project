import { Page, Locator } from "@playwright/test";

export class LoginPage {
    private readonly page: Page;
    private readonly emailInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;
    private readonly warningMessage: Locator;
    private readonly rturningCustomerHeader: Locator;


    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.getByPlaceholder("E-Mail Address");
        this.passwordInput = page.getByPlaceholder("Password");
        this.loginButton = page.locator("input[value='Login']");
        this.warningMessage = page.getByText(" Warning: No match for E-Mail Address and/or Password.");
        this.rturningCustomerHeader = page.locator("h2", {hasText: "Returning Customer"});
    }

    /**
     * Verifies if the login page is displayed
     * @returns Promise<boolean> - Returns true if the returning customer header is visible
     */
    async isLoginPageDisplayed(): Promise<boolean> {
        return await this.rturningCustomerHeader.isVisible();
    }

    /**
     * Enters the email address in the email input field
     * @param stringEmail - The email address to enter
     * @returns Promise<void>
     */
    async enterEmail(stringEmail: string): Promise<void> {
        await this.emailInput.fill(stringEmail);
    }

    /**
     * Enters the password in the password input field
     * @param stringPassword - The password to enter
     * @returns Promise<void>
     */
    async enterPassword(stringPassword: string): Promise<void> {
        await this.passwordInput.fill(stringPassword);
    }

    /**
     * Clicks the login button to submit login form
     * @returns Promise<void>
     */
    async clickLoginButton(): Promise<void> {
        await this.loginButton.click();
    }

    /**
     * Checks if warning message for invalid credentials is displayed
     * @returns Promise<boolean> - Returns true if warning message is visible
     */
    async isWarningMessageDisplayed(): Promise<boolean> {
        return await this.warningMessage.isVisible();
    }

    /**
     * Performs complete login workflow with email and password
     * @param stringEmail - The email address to login with
     * @param stringPassword - The password to login with
     * @returns Promise<void>
     */
    async login(stringEmail: string, stringPassword: string): Promise<void> {
        await this.enterEmail(stringEmail);
        await this.enterPassword(stringPassword);
        await this.clickLoginButton();
    }

    
}

