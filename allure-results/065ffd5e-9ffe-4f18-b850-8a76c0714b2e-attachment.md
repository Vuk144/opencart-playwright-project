# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: EndToEndTest.spec.ts >> execute end-to-end test flow @end-to-end
- Location: tests\EndToEndTest.spec.ts:17:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - button "$ Currency " [ref=e7] [cursor=pointer]:
        - strong [ref=e8]: $
        - text: Currency
        - generic [ref=e9]: 
      - list [ref=e11]:
        - listitem [ref=e12]:
          - link "" [ref=e13] [cursor=pointer]:
            - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=information/contact
            - generic [ref=e14]: 
          - text: "123456789"
        - listitem [ref=e15]:
          - link " My Account" [ref=e16] [cursor=pointer]:
            - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/account
            - generic [ref=e17]: 
            - text: My Account
        - listitem [ref=e19]:
          - link " Wish List (0)" [ref=e20] [cursor=pointer]:
            - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/wishlist
            - generic [ref=e21]: 
            - text: Wish List (0)
        - listitem [ref=e22]:
          - link " Shopping Cart" [ref=e23] [cursor=pointer]:
            - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=checkout/cart
            - generic [ref=e24]: 
            - text: Shopping Cart
        - listitem [ref=e25]:
          - link " Checkout" [ref=e26] [cursor=pointer]:
            - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=checkout/checkout
            - generic [ref=e27]: 
            - text: Checkout
  - banner [ref=e28]:
    - generic [ref=e30]:
      - link "Your Store" [ref=e33] [cursor=pointer]:
        - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=common/home
        - img "Your Store" [ref=e34]
      - generic [ref=e36]:
        - textbox "Search" [ref=e37]
        - button "" [ref=e39] [cursor=pointer]:
          - generic [ref=e40]: 
      - button " 0 item(s) - $0.00" [ref=e43] [cursor=pointer]:
        - generic [ref=e44]: 
        - text: 0 item(s) - $0.00
  - navigation [ref=e46]:
    - generic: 
    - list [ref=e48]:
      - listitem [ref=e49]:
        - link "Desktops" [ref=e50] [cursor=pointer]:
          - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=product/category&path=20
      - listitem [ref=e51]:
        - link "Laptops & Notebooks" [ref=e52] [cursor=pointer]:
          - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=product/category&path=18
      - listitem [ref=e53]:
        - link "Components" [ref=e54] [cursor=pointer]:
          - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=product/category&path=25
      - listitem [ref=e55]:
        - link "Tablets" [ref=e56] [cursor=pointer]:
          - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=product/category&path=57
      - listitem [ref=e57]:
        - link "Software" [ref=e58] [cursor=pointer]:
          - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=product/category&path=17
      - listitem [ref=e59]:
        - link "Phones & PDAs" [ref=e60] [cursor=pointer]:
          - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=product/category&path=24
      - listitem [ref=e61]:
        - link "Cameras" [ref=e62] [cursor=pointer]:
          - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=product/category&path=33
      - listitem [ref=e63]:
        - link "MP3 Players" [ref=e64] [cursor=pointer]:
          - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=product/category&path=34
  - generic [ref=e65]:
    - list [ref=e66]:
      - listitem [ref=e67]:
        - link "" [ref=e68] [cursor=pointer]:
          - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=common/home
          - generic [ref=e69]: 
      - listitem [ref=e70]:
        - link "Account" [ref=e71] [cursor=pointer]:
          - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/account
      - listitem [ref=e72]:
        - link "Logout" [ref=e73] [cursor=pointer]:
          - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/logout
    - generic [ref=e74]:
      - generic [ref=e75]:
        - heading "Account Logout" [level=1] [ref=e76]
        - paragraph [ref=e77]: You have been logged off your account. It is now safe to leave the computer.
        - paragraph [ref=e78]: Your shopping cart has been saved, the items inside it will be restored whenever you log back into your account.
        - link "Continue" [ref=e80] [cursor=pointer]:
          - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=common/home
      - complementary [ref=e81]:
        - generic [ref=e82]:
          - link "Login" [ref=e83] [cursor=pointer]:
            - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/login
          - link "Register" [ref=e84] [cursor=pointer]:
            - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/register
          - link "Forgotten Password" [ref=e85] [cursor=pointer]:
            - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/forgotten
          - link "My Account" [ref=e86] [cursor=pointer]:
            - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/account
          - link "Address Book" [ref=e87] [cursor=pointer]:
            - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/address
          - link "Wish List" [ref=e88] [cursor=pointer]:
            - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/wishlist
          - link "Order History" [ref=e89] [cursor=pointer]:
            - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/order
          - link "Downloads" [ref=e90] [cursor=pointer]:
            - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/download
          - link "Recurring payments" [ref=e91] [cursor=pointer]:
            - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/recurring
          - link "Reward Points" [ref=e92] [cursor=pointer]:
            - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/reward
          - link "Returns" [ref=e93] [cursor=pointer]:
            - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/return
          - link "Transactions" [ref=e94] [cursor=pointer]:
            - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/transaction
          - link "Newsletter" [ref=e95] [cursor=pointer]:
            - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/newsletter
  - contentinfo [ref=e96]:
    - generic [ref=e97]:
      - generic [ref=e98]:
        - generic [ref=e99]:
          - heading "Information" [level=5] [ref=e100]
          - list [ref=e101]:
            - listitem [ref=e102]:
              - link "About Us" [ref=e103] [cursor=pointer]:
                - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=information/information&information_id=4
            - listitem [ref=e104]:
              - link "Delivery Information" [ref=e105] [cursor=pointer]:
                - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=information/information&information_id=6
            - listitem [ref=e106]:
              - link "Privacy Policy" [ref=e107] [cursor=pointer]:
                - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=information/information&information_id=3
            - listitem [ref=e108]:
              - link "Terms & Conditions" [ref=e109] [cursor=pointer]:
                - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=information/information&information_id=5
        - generic [ref=e110]:
          - heading "Customer Service" [level=5] [ref=e111]
          - list [ref=e112]:
            - listitem [ref=e113]:
              - link "Contact Us" [ref=e114] [cursor=pointer]:
                - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=information/contact
            - listitem [ref=e115]:
              - link "Returns" [ref=e116] [cursor=pointer]:
                - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/return/add
            - listitem [ref=e117]:
              - link "Site Map" [ref=e118] [cursor=pointer]:
                - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=information/sitemap
        - generic [ref=e119]:
          - heading "Extras" [level=5] [ref=e120]
          - list [ref=e121]:
            - listitem [ref=e122]:
              - link "Brands" [ref=e123] [cursor=pointer]:
                - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=product/manufacturer
            - listitem [ref=e124]:
              - link "Gift Certificates" [ref=e125] [cursor=pointer]:
                - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/voucher
            - listitem [ref=e126]:
              - link "Affiliate" [ref=e127] [cursor=pointer]:
                - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=affiliate/login
            - listitem [ref=e128]:
              - link "Specials" [ref=e129] [cursor=pointer]:
                - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=product/special
        - generic [ref=e130]:
          - heading "My Account" [level=5] [ref=e131]
          - list [ref=e132]:
            - listitem [ref=e133]:
              - link "My Account" [ref=e134] [cursor=pointer]:
                - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/account
            - listitem [ref=e135]:
              - link "Order History" [ref=e136] [cursor=pointer]:
                - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/order
            - listitem [ref=e137]:
              - link "Wish List" [ref=e138] [cursor=pointer]:
                - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/wishlist
            - listitem [ref=e139]:
              - link "Newsletter" [ref=e140] [cursor=pointer]:
                - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/newsletter
      - separator [ref=e141]
      - paragraph [ref=e142]:
        - text: Powered By
        - link "OpenCart" [ref=e143] [cursor=pointer]:
          - /url: http://www.opencart.com
        - text: Your Store © 2026
```

# Test source

```ts
  1   | 
  2   | 
  3   | import { test, expect, Page } from '@playwright/test';
  4   | import { RegistrationPage } from '../pages/RegistrationPage';
  5   | import { HomePage } from '../pages/HomePage';
  6   | import { RandomDataUtil } from '../utils/randomDataGenerator';
  7   | import { TestConfig } from '../test.config';
  8   | import { LogoutPage } from '../pages/LogoutPage';
  9   | import { LoginPage } from '../pages/LoginPage';
  10  | import { MyAccountPage } from '../pages/MyAccountPage';
  11  | import { SearchResultsPage } from '../pages/SearchResultsPage';
  12  | import { ProductPage } from '../pages/ProductPage';
  13  | import { ShoppingCartPage } from '../pages/ShoppingCartPage';
  14  | import { CheckoutPage } from '../pages/CheckoutPage';
  15  | 
  16  | 
  17  | test('execute end-to-end test flow @end-to-end', async ({ page }) => {
  18  |     const config = new TestConfig();
  19  | 
  20  |     await page.goto(config.appUrl);
  21  | 
  22  | 
  23  |     let registeredEmail: string = await performRegistration(page);
  24  |     console.log("✔ Registration is completed!");
  25  | 
  26  | 
  27  |     await performLogout(page);
  28  |     console.log("✔ Logout is completed!");
  29  | 
  30  | 
  31  |     await performLogin(page, registeredEmail);
  32  |     console.log("✔ Login is completed!");
  33  | 
  34  | 
  35  |     await addProductToCart(page);
  36  |     console.log("✔ Product added to cart!");
  37  | 
  38  | 
  39  |     await verifyShoppingCart(page);
  40  |     console.log("✔ Shopping cart verification completed!");
  41  | 
  42  | 
  43  | });
  44  | 
  45  | 
  46  | 
  47  | async function performRegistration(page: Page): Promise<string> {
  48  |     const homePage = new HomePage(page);
  49  |     await homePage.goToRegistrationPage();
  50  | 
  51  |     const registrationPage = new RegistrationPage(page);
  52  | 
  53  |     // Fill in random user details
  54  |     await registrationPage.enterFirstName(RandomDataUtil.generateRandomFirstName());
  55  |     await registrationPage.enterLastName(RandomDataUtil.generateRandomLastName());
  56  | 
  57  |     let email: string = RandomDataUtil.generateRandomEmail();
  58  |     await registrationPage.enterEmail(email);
  59  |     await registrationPage.enterTelephone(RandomDataUtil.generateRandomTelephone());
  60  | 
  61  |     await registrationPage.enterPassword("test123");
  62  |     await registrationPage.enterConfirmPassword("test123");
  63  | 
  64  |     await registrationPage.acceptPrivacyPolicy();  
  65  |     await registrationPage.clickContinueButton();     
  66  | 
  67  |     const confirmationMsg = await registrationPage.isAccountCreatedMessageDisplayed();
  68  |     expect(confirmationMsg).toBeTruthy();
  69  | 
  70  |     return email; 
  71  | }
  72  | 
  73  | 
  74  | 
  75  | async function performLogout(page: Page) {
  76  |     const myAccountPage = new MyAccountPage(page);
  77  |     const logoutPage: LogoutPage = await myAccountPage.clickLogout();
  78  | 
  79  | 
> 80  |     expect(await logoutPage.isContinueButtonVisible()).toBe(true);
      |                                                        ^ Error: expect(received).toBe(expected) // Object.is equality
  81  | 
  82  |     // const homePage = await logoutPage.clickContinue();
  83  |     // expect(await homePage.isHomePageDisplayed()).toBe(true);
  84  | }
  85  | 
  86  | 
  87  | 
  88  | async function performLogin(page: Page, email: string) {
  89  |     const config = new TestConfig();
  90  |     await page.goto(config.appUrl);  
  91  | 
  92  |     const homePage = new HomePage(page);
  93  |     await homePage.goToLoginPage();
  94  | 
  95  |     const loginPage = new LoginPage(page);
  96  |     await loginPage.login(email, "test123");  
  97  | 
  98  | 
  99  |     const myAccountPage = new MyAccountPage(page);
  100 |     expect(await myAccountPage.isMyAccountPageExists()).toBeTruthy();
  101 | }
  102 | 
  103 | 
  104 | async function addProductToCart(page: Page) {
  105 |     const homePage = new HomePage(page);
  106 | 
  107 |     const config = new TestConfig();
  108 |     const productName: string = config.productName;
  109 |     const productQuantity: string = config.productQuantity;
  110 | 
  111 |     await homePage.enterProductName(productName);
  112 |     await homePage.clickSearch();  
  113 | 
  114 |     const searchResultsPage = new SearchResultsPage(page);
  115 | 
  116 |     expect(await searchResultsPage.isSearchResultsPageExists()).toBeTruthy();
  117 | 
  118 | 
  119 |     expect(await searchResultsPage.isProductExist(productName)).toBeTruthy();
  120 | 
  121 |     
  122 |     const productPage = await searchResultsPage.selectProduct(productName);
  123 |     await productPage?.setQuantity(productQuantity);
  124 |     await productPage?.addToCart();  
  125 | 
  126 |     await page.waitForTimeout(3000); 
  127 | 
  128 |     // Confirm product was added
  129 |     // expect(await productPage?.isConfirmationMessageVisible()).toBe(true);
  130 | }
  131 | 
  132 | 
  133 | // Function to verify the shopping cart details
  134 | async function verifyShoppingCart(page: Page) {
  135 |     const productPage = new ProductPage(page);
  136 | 
  137 |     // Navigate to shopping cart from product page
  138 |     await productPage.clickItemsToNavigateToCart();
  139 |     const shoppingCartPage: ShoppingCartPage = await productPage.clickViewCart();
  140 | 
  141 |     console.log("🛒 Navigated to shopping cart!");
  142 | 
  143 |     const config = new TestConfig();
  144 |     
  145 |     // Validate that total price is correct (based on config)
  146 |     expect(await shoppingCartPage.getTotalPrice()).toBe(config.totalPrice);
  147 | }
  148 | 
  149 | 
  150 | // Function to perform checkout (disabled for demo site)
  151 | async function performCheckout(page: Page) {
  152 |     // Checkout feature is not implemented since it's a demo site.
  153 |     // Place your checkout flow logic here if backend is available.
  154 | }
  155 | 
```