import { Page, expect, Locator } from '@playwright/test';

export class CheckoutPage {
    private readonly page: Page;
    
    // Locators
    private readonly radioGuest: Locator;
    private readonly btnContinue: Locator;
    private readonly txtFirstName: Locator;
    private readonly txtLastName: Locator;
    private readonly txtAddress1: Locator;
    private readonly txtAddress2: Locator;
    private readonly txtCity: Locator;
    private readonly txtPin: Locator;
    private readonly drpCountry: Locator;
    private readonly drpState: Locator;
    private readonly btnContinueBillingAddress: Locator;
    private readonly btnContinueDeliveryAddress: Locator;
    private readonly txtDeliveryMethod: Locator;
    private readonly btnContinueShippingAddress: Locator;
    private readonly chkboxTerms: Locator;
    private readonly btnContinuePaymentMethod: Locator;
    private readonly lblTotalPrice: Locator;
    private readonly btnConfOrder: Locator;
    private readonly lblOrderConMsg: Locator;

    constructor(page: Page) {
        this.page = page;
        
        // Initialize locators with CSS selectors
        this.radioGuest = page.locator('input[value="guest"]');
        this.btnContinue = page.locator('#button-account');
        this.txtFirstName = page.locator('#input-payment-firstname');
        this.txtLastName = page.locator('#input-payment-lastname');
        this.txtAddress1 = page.locator('#input-payment-address-1');
        this.txtAddress2 = page.locator('#input-payment-address-2');
        this.txtCity = page.locator('#input-payment-city');
        this.txtPin = page.locator('#input-payment-postcode');
        this.drpCountry = page.locator('#input-payment-country');
        this.drpState = page.locator('#input-payment-zone');
        this.btnContinueBillingAddress = page.locator('#button-payment-address');
        this.btnContinueDeliveryAddress = page.locator('#button-shipping-address');
        this.txtDeliveryMethod = page.locator('textarea[name="comment"]');
        this.btnContinueShippingAddress = page.locator('#button-shipping-method');
        this.chkboxTerms = page.locator('input[name="agree"]');
        this.btnContinuePaymentMethod = page.locator('#button-payment-method');
        this.lblTotalPrice = page.locator('strong:has-text("Total:") + td');
        this.btnConfOrder = page.locator('#button-confirm');
        this.lblOrderConMsg = page.locator('#content h1');
    }

    // Check if checkout page exists
    /**
     * Verifies if the checkout page exists by checking page title
     * @returns Promise<boolean> - Returns true if page title is "Checkout"
     */
    async isCheckoutPageExists() {
        try {
            await expect(this.page).toHaveTitle("Checkout");
            return true;
        } catch (error) {
            return false;
        }
    }
    
    // Choose checkout option
    /**
     * Selects the checkout option (Guest or Registered)
     * @param checkOutOption - The checkout option to select (e.g., "Guest Checkout")
     * @returns Promise<void>
     */
    async chooseCheckoutOption(checkOutOption: string){
        if (checkOutOption === "Guest Checkout") {
            await this.radioGuest.click();
        }
    }

    // Click on continue button
    /**
     * Clicks the Continue button for checkout
     * @returns Promise<void>
     */
    async clickOnContinue(){
        await this.btnContinue.click();
    }

    // Form field methods
    /**
     * Sets the first name in billing address
     * @param firstName - The first name to enter
     * @returns Promise<void>
     */
    async setFirstName(firstName: string){
        await this.txtFirstName.fill(firstName);
    }

    /**
     * Sets the last name in billing address
     * @param lastName - The last name to enter
     * @returns Promise<void>
     */
    async setLastName(lastName: string){
        await this.txtLastName.fill(lastName);
    }

    /**
     * Sets the address line 1 in billing address
     * @param address1 - The first address line to enter
     * @returns Promise<void>
     */
    async setAddress1(address1: string) {
        await this.txtAddress1.fill(address1);
    }

    /**
     * Sets the address line 2 in billing address
     * @param address2 - The second address line to enter
     * @returns Promise<void>
     */
    async setAddress2(address2: string){
        await this.txtAddress2.fill(address2);
    }

    /**
     * Sets the city in billing address
     * @param city - The city to enter
     * @returns Promise<void>
     */
    async setCity(city: string){
        await this.txtCity.fill(city);
    }

    /**
     * Sets the postal code/PIN in billing address
     * @param pin - The postal code to enter
     * @returns Promise<void>
     */
    async setPin(pin: string){
        await this.txtPin.fill(pin);
    }

    /**
     * Selects a country from the country dropdown
     * @param country - The country name to select
     * @returns Promise<void>
     */
    async setCountry(country: string){
        await this.drpCountry.selectOption({ label: country });
    }

    /**
     * Selects a state/region from the state dropdown
     * @param state - The state/region name to select
     * @returns Promise<void>
     */
    async setState(state: string){
        await this.drpState.selectOption({ label: state });
    }

    // Continue button methods
    /**
     * Clicks Continue button after billing address entry
     * @returns Promise<void>
     */
    async clickOnContinueAfterBillingAddress() {
        await this.btnContinueBillingAddress.click();
    }

    /**
     * Clicks Continue button after delivery address entry
     * @returns Promise<void>
     */
    async clickOnContinueAfterDeliveryAddress() {
        await this.btnContinueDeliveryAddress.click();
    }

    // Delivery method
    /**
     * Sets the delivery method comment
     * @param deliveryMsg - The delivery message/comment to enter
     * @returns Promise<void>
     */
    async setDeliveryMethodComment(deliveryMsg: string) {
        await this.txtDeliveryMethod.fill(deliveryMsg);
    }

    /**
     * Clicks Continue button after delivery method selection
     * @returns Promise<void>
     */
    async clickOnContinueAfterDeliveryMethod() {
        await this.btnContinueShippingAddress.click();
    }

    // Terms and conditions
    /**
     * Selects the Terms and Conditions checkbox
     * @returns Promise<void>
     */
    async selectTermsAndConditions() {
        await this.chkboxTerms.check();
    }

    /**
     * Clicks Continue button after payment method selection
     * @returns Promise<void>
     */
    async clickOnContinueAfterPaymentMethod() {
        await this.btnContinuePaymentMethod.click();
    }

    // Order confirmation
    /**
     * Gets the total price before confirming the order
     * @returns Promise<string | null> - The total price text or null if not found
     */
    async getTotalPriceBeforeConfOrder() {
        return await this.lblTotalPrice.textContent();
    }

    /**
     * Clicks the Confirm Order button
     * @returns Promise<void>
     */
    async clickOnConfirmOrder() {
        await this.btnConfOrder.click();
    }

    /**
     * Verifies if the order has been placed successfully
     * @returns Promise<boolean> - Returns true if order confirmation message is displayed
     */
    async isOrderPlaced() {
        try {
            // Handle alert if present
            if (this.page.on('dialog', dialog => dialog.accept())) {
                await this.page.waitForEvent('dialog');
            }
            
            await expect(this.lblOrderConMsg).toHaveText("Your order has been placed!");
            return true;
        } catch (error) {
            console.log(`Error verifying order placement: ${error}`);
            return false;
        }
    }
}