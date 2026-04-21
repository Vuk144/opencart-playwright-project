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

    /**
     * Verifies if the home page is displayed by checking search input visibility
     * @returns Promise<boolean> - Returns true if search input is visible
     */
    async isHomePageDisplayed(): Promise<boolean> {
        await this.page.waitForLoadState('networkidle');
        return await this.txtSearchInput.isVisible();
    }

    /**
     * Clicks the search button
     * @returns Promise<void>
     */
    async clickSearchButton() {
        try {
            await this.btnSearchButton.click();
        } catch (error) {
            console.error("Error clicking Search button:", error);
            throw error; // Rethrow the error after logging it
        }
    }

    /**
     * Enters search text in the search input field
     * @param stringProductName - The product name to search for
     * @returns Promise<void>
     */
    async enterSearchText(stringProductName: string) {
        try {
            await this.txtSearchInput.fill(stringProductName);
        } catch (error) {
            console.error("Error entering search text:", error);
            throw error; // Rethrow the error after logging it
        }
    }

    /**
     * Clicks on the My Account dropdown menu
     * @returns Promise<void>
     */
    async clickMyAccountDropdown() {
        try {
            await this.lnkMyAccount.click();
        } catch (error) 
        {            
            console.error("Error clicking My Account dropdown:", error);
            throw error; // Rethrow the error after logging it
        }    
    }

    /**
     * Clicks on the Register button
     * @returns Promise<void>
     */
    async clickRegisterButton() {
        try {
            await this.lnkRegister.click();
        }        catch (error) {
            console.error("Error clicking Register button:", error);
            throw error; // Rethrow the error after logging it
        }
    }
    /**
     * Clicks on the Login button
     * @returns Promise<void>
     */
    async clickLoginButton() {
        try {
            await this.lnkLogin.click();
        } catch (error) {
            console.error("Error clicking Login button:", error);
            throw error; // Rethrow the error after logging it
        }
    }

    /**
     * Navigates to login page by clicking My Account dropdown and Login button
     * @returns Promise<void>
     */
    async goToLoginPage() {
        await this.clickMyAccountDropdown();
        await this.clickLoginButton();
    }

    /**
     * Navigates to registration page by clicking My Account dropdown and Register button
     * @returns Promise<void>
     */
    async goToRegistrationPage() {
        await this.clickMyAccountDropdown();
        await this.clickRegisterButton();
    }

    /**
     * Enters product name in the search field
     * @param productName - The name of the product to search for
     * @returns Promise<void>
     */
    async enterProductName(productName: string) {
        try {
            await this.txtSearchInput.fill(productName);
        } catch (error) {
            console.error("Error entering product name in search field:", error);
            throw error; // Rethrow the error after logging it
        }
    }
    /**
     * Performs search by entering product name and clicking search button
     * @param productName - The name of the product to search for
     * @returns Promise<void>
     */
    async clickSearch() {
        try {
            await this.btnSearchButton.click();
        } catch (error) {
            console.error("Error clicking search button:", error);
            throw error; // Rethrow the error after logging it
        }
    }
}