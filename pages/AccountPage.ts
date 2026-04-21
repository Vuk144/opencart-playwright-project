import { Page, Locator } from "@playwright/test";

export class AccountPage {
    private readonly page: Page;
    private readonly accountHeader: Locator;


    constructor(page: Page) {
        this.page = page;
        this.accountHeader = page.locator("h2", {hasText: "My Account"});
    }

    /**
     * Verifies if the account page is displayed
     * @returns Promise<boolean> - Returns true if account header is visible
     */
    async isAccountPageDisplayed(): Promise<boolean> {
        return await this.accountHeader.isVisible();
    }
}