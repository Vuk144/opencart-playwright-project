import { Locator, Page } from "@playwright/test";

export class HomePage {

    private readonly page: Page;
    private readonly txtSearchInput: Locator;
    private readonly btnSearchButton: Locator;
    private readonly lnkMyAccount: Locator;
    private readonly lnkRegister: Locator;
    private readonly lnkLogin: Locator;

    //private readonly registerBtn : Locator;




    constructor(page: Page) {
        this.page = page;
        this.txtSearchInput = page.locator("input[name='search']");
        this.btnSearchButton = page.locator(".input-group-btn");
        this.lnkMyAccount = page.locator('a[title="My Account"]');
        this.lnkRegister = page.getByRole('link', { name: 'Register' });
        this.lnkLogin = page.getByRole('link', { name: 'Login' });


    }

    async isHomePageDisplayed(): Promise<boolean> {
        await this.page.waitForLoadState('networkidle');
        return await this.txtSearchInput.isVisible();
    }

    async clickSearchButton() {
        try {
            await this.btnSearchButton.click();
        } catch (error) {
            console.error("Error clicking Search button:", error);
            throw error; // Rethrow the error after logging it
        }
    }

    async enterSearchText(stringProductName: string) {
        try {
            await this.txtSearchInput.fill(stringProductName);
        } catch (error) {
            console.error("Error entering search text:", error);
            throw error; // Rethrow the error after logging it
        }
    }

    async clickMyAccountDropdown() {
        try {
            await this.lnkMyAccount.click();
        } catch (error) 
        {            
            console.error("Error clicking My Account dropdown:", error);
            throw error; // Rethrow the error after logging it
        }    
    }

    async clickRegisterButton() {
        try {
            await this.lnkRegister.click();
        }        catch (error) {
            console.error("Error clicking Register button:", error);
            throw error; // Rethrow the error after logging it
        }
    }
    async clickLoginButton() {
        try {
            await this.lnkLogin.click();
        } catch (error) {
            console.error("Error clicking Login button:", error);
            throw error; // Rethrow the error after logging it
        }
    }

    async goToLoginPage() {
        await this.clickMyAccountDropdown();
        await this.clickLoginButton();
    }

    async goToRegistrationPage() {
        await this.clickMyAccountDropdown();
        await this.clickRegisterButton();
    }

    async enterProductName(productName: string) {
        try {
            await this.txtSearchInput.fill(productName);
        } catch (error) {
            console.error("Error entering product name in search field:", error);
            throw error; // Rethrow the error after logging it
        }
    }
    async clickSearch() {
        try {
            await this.btnSearchButton.click();
        } catch (error) {
            console.error("Error clicking search button:", error);
            throw error; // Rethrow the error after logging it
        }
    }
}