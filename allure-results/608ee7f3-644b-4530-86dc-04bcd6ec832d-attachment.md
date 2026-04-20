# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accountRegistration.spec.ts >> Account Registration Tests >> TC_01 Verify that user can navigate to registration page @master @sanity @regression
- Location: tests\accountRegistration.spec.ts:21:9

# Error details

```
Error: expect(received).toBeTruthy()

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
        - link "Register" [ref=e73] [cursor=pointer]:
          - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/register
    - generic [ref=e74]:
      - generic [ref=e75]:
        - heading "Register Account" [level=1] [ref=e76]
        - paragraph [ref=e77]:
          - text: If you already have an account with us, please login at the
          - link "login page" [ref=e78] [cursor=pointer]:
            - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/login
          - text: .
        - generic [ref=e79]:
          - group "Your Personal Details" [ref=e80]:
            - generic [ref=e81]: Your Personal Details
            - text: "*"
            - generic [ref=e82]:
              - generic [ref=e83]: "* First Name"
              - textbox "* First Name" [ref=e85]:
                - /placeholder: First Name
            - generic [ref=e86]:
              - generic [ref=e87]: "* Last Name"
              - textbox "* Last Name" [ref=e89]:
                - /placeholder: Last Name
            - generic [ref=e90]:
              - generic [ref=e91]: "* E-Mail"
              - textbox "* E-Mail" [ref=e93]:
                - /placeholder: E-Mail
            - generic [ref=e94]:
              - generic [ref=e95]: "* Telephone"
              - textbox "* Telephone" [ref=e97]:
                - /placeholder: Telephone
          - group "Your Password" [ref=e98]:
            - generic [ref=e99]: Your Password
            - generic [ref=e100]:
              - generic [ref=e101]: "* Password"
              - textbox "* Password" [ref=e103]:
                - /placeholder: Password
            - generic [ref=e104]:
              - generic [ref=e105]: "* Password Confirm"
              - textbox "* Password Confirm" [ref=e107]:
                - /placeholder: Password Confirm
          - group "Newsletter" [ref=e108]:
            - generic [ref=e109]: Newsletter
            - generic [ref=e110]:
              - generic [ref=e111]: Subscribe
              - generic [ref=e112]:
                - generic [ref=e113] [cursor=pointer]:
                  - radio "Yes" [ref=e114]
                  - text: "Yes"
                - generic [ref=e115] [cursor=pointer]:
                  - radio "No" [checked] [ref=e116]
                  - text: "No"
          - generic [ref=e117]:
            - text: I have read and agree to the
            - link "Privacy Policy" [ref=e118] [cursor=pointer]:
              - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=information/information/agree&information_id=3
            - checkbox [ref=e119]
            - button "Continue" [ref=e120] [cursor=pointer]
      - complementary [ref=e121]:
        - generic [ref=e122]:
          - link "Login" [ref=e123] [cursor=pointer]:
            - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/login
          - link "Register" [ref=e124] [cursor=pointer]:
            - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/register
          - link "Forgotten Password" [ref=e125] [cursor=pointer]:
            - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/forgotten
          - link "My Account" [ref=e126] [cursor=pointer]:
            - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/account
          - link "Address Book" [ref=e127] [cursor=pointer]:
            - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/address
          - link "Wish List" [ref=e128] [cursor=pointer]:
            - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/wishlist
          - link "Order History" [ref=e129] [cursor=pointer]:
            - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/order
          - link "Downloads" [ref=e130] [cursor=pointer]:
            - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/download
          - link "Recurring payments" [ref=e131] [cursor=pointer]:
            - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/recurring
          - link "Reward Points" [ref=e132] [cursor=pointer]:
            - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/reward
          - link "Returns" [ref=e133] [cursor=pointer]:
            - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/return
          - link "Transactions" [ref=e134] [cursor=pointer]:
            - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/transaction
          - link "Newsletter" [ref=e135] [cursor=pointer]:
            - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/newsletter
  - contentinfo [ref=e136]:
    - generic [ref=e137]:
      - generic [ref=e138]:
        - generic [ref=e139]:
          - heading "Information" [level=5] [ref=e140]
          - list [ref=e141]:
            - listitem [ref=e142]:
              - link "About Us" [ref=e143] [cursor=pointer]:
                - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=information/information&information_id=4
            - listitem [ref=e144]:
              - link "Delivery Information" [ref=e145] [cursor=pointer]:
                - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=information/information&information_id=6
            - listitem [ref=e146]:
              - link "Privacy Policy" [ref=e147] [cursor=pointer]:
                - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=information/information&information_id=3
            - listitem [ref=e148]:
              - link "Terms & Conditions" [ref=e149] [cursor=pointer]:
                - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=information/information&information_id=5
        - generic [ref=e150]:
          - heading "Customer Service" [level=5] [ref=e151]
          - list [ref=e152]:
            - listitem [ref=e153]:
              - link "Contact Us" [ref=e154] [cursor=pointer]:
                - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=information/contact
            - listitem [ref=e155]:
              - link "Returns" [ref=e156] [cursor=pointer]:
                - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/return/add
            - listitem [ref=e157]:
              - link "Site Map" [ref=e158] [cursor=pointer]:
                - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=information/sitemap
        - generic [ref=e159]:
          - heading "Extras" [level=5] [ref=e160]
          - list [ref=e161]:
            - listitem [ref=e162]:
              - link "Brands" [ref=e163] [cursor=pointer]:
                - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=product/manufacturer
            - listitem [ref=e164]:
              - link "Gift Certificates" [ref=e165] [cursor=pointer]:
                - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/voucher
            - listitem [ref=e166]:
              - link "Affiliate" [ref=e167] [cursor=pointer]:
                - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=affiliate/login
            - listitem [ref=e168]:
              - link "Specials" [ref=e169] [cursor=pointer]:
                - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=product/special
        - generic [ref=e170]:
          - heading "My Account" [level=5] [ref=e171]
          - list [ref=e172]:
            - listitem [ref=e173]:
              - link "My Account" [ref=e174] [cursor=pointer]:
                - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/account
            - listitem [ref=e175]:
              - link "Order History" [ref=e176] [cursor=pointer]:
                - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/order
            - listitem [ref=e177]:
              - link "Wish List" [ref=e178] [cursor=pointer]:
                - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/wishlist
            - listitem [ref=e179]:
              - link "Newsletter" [ref=e180] [cursor=pointer]:
                - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/newsletter
      - separator [ref=e181]
      - paragraph [ref=e182]:
        - text: Powered By
        - link "OpenCart" [ref=e183] [cursor=pointer]:
          - /url: http://www.opencart.com
        - text: Your Store © 2026
```

# Test source

```ts
  1  | import {test, expect} from "@playwright/test";
  2  | import { HomePage } from "../pages/HomePage";
  3  | import { RegistrationPage } from "../pages/RegistrationPage";
  4  | import { RandomDataUtil } from "../utils/randomDataGenerator";  
  5  | import { TestConfig } from "../test.config";
  6  | 
  7  | 
  8  | let homePage: HomePage;
  9  | let registrationPage: RegistrationPage;
  10 | let testConfig: TestConfig;
  11 | 
  12 | test.describe("Account Registration Tests", () => {
  13 |     test.beforeEach(async ({page}) => {
  14 |         homePage = new HomePage(page);
  15 |         registrationPage = new RegistrationPage(page);
  16 |         testConfig = new TestConfig();
  17 |         await page.goto(testConfig.appUrl);
  18 |         
  19 |     });
  20 | 
  21 |     test("TC_01 Verify that user can navigate to registration page @master @sanity @regression", async ({}) => {
  22 |         const isHomePageDisplayed = await homePage.isHomePageDisplayed();
  23 |         expect(isHomePageDisplayed).toBeTruthy();
  24 |         await homePage.clickMyAccountDropdown();
  25 |         await homePage.clickRegisterButton();
  26 |         const isRegistrationPageDisplayed = await registrationPage.isRegisterAccountPageDisplayed();
> 27 |         expect(isRegistrationPageDisplayed).toBeTruthy();
     |                                             ^ Error: expect(received).toBeTruthy()
  28 |         
  29 |     });
  30 | 
  31 |     test("TC_02 Verify that user can register a new account", async ({}) => {
  32 |         await homePage.isHomePageDisplayed();
  33 |         await homePage.clickMyAccountDropdown();
  34 |         await homePage.clickRegisterButton();
  35 |         //let isRegistrationPageDisplayed = await registrationPage.isRegisterAccountPageDisplayed();
  36 |         //expect(isRegistrationPageDisplayed).toBeTruthy();
  37 |         let randomFistName = RandomDataUtil.generateRandomFirstName();
  38 |         let randomLastName = RandomDataUtil.generateRandomLastName();
  39 |         let randomEmail = RandomDataUtil.generateRandomEmail();
  40 |         let randomPassword = RandomDataUtil.generateRandomPassword();
  41 |         let randomTelephone = RandomDataUtil.generateRandomTelephone();
  42 | 
  43 |         await registrationPage.registerNewUser({
  44 |             firstName: randomFistName,
  45 |             lastName: randomLastName,
  46 |             email: randomEmail,
  47 |             telephone: randomTelephone,
  48 |             password: randomPassword,
  49 |             subscribeNewsletter: true
  50 |         });
  51 |         // Add assertions to verify successful registration, e.g., check for a success message or redirection to a specific page.
  52 | 
  53 |         let boolAccountCreated = await registrationPage.isAccountCreatedMessageDisplayed();
  54 |         expect(boolAccountCreated).toBeTruthy();
  55 | 
  56 |     });
  57 | 
  58 | 
  59 | 
  60 | 
  61 | 
  62 | });
```