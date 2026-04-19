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

    async isLoginPageDisplayed(): Promise<boolean> {
        return await this.rturningCustomerHeader.isVisible();
    }

    async enterEmail(stringEmail: string): Promise<void> {
        await this.emailInput.fill(stringEmail);
    }

    async enterPassword(stringPassword: string): Promise<void> {
        await this.passwordInput.fill(stringPassword);
    }

    async clickLoginButton(): Promise<void> {
        await this.loginButton.click();
    }

    async isWarningMessageDisplayed(): Promise<boolean> {
        return await this.warningMessage.isVisible();
    }

    async login(stringEmail: string, stringPassword: string): Promise<void> {
        await this.enterEmail(stringEmail);
        await this.enterPassword(stringPassword);
        await this.clickLoginButton();
    }

    
}

