# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accountRegistration.spec.ts >> Account Registration Tests >> TC_02 Verify that user can register a new account
- Location: tests\accountRegistration.spec.ts:31:9

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
        - link "Success" [ref=e73] [cursor=pointer]:
          - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/success
    - generic [ref=e74]:
      - generic [ref=e75]:
        - heading "Your Account Has Been Created!" [level=1] [ref=e76]
        - paragraph [ref=e77]: Congratulations! Your new account has been successfully created!
        - paragraph [ref=e78]: You can now take advantage of member privileges to enhance your online shopping experience with us.
        - paragraph [ref=e79]: If you have ANY questions about the operation of this online shop, please e-mail the store owner.
        - paragraph [ref=e80]:
          - text: A confirmation has been sent to the provided e-mail address. If you have not received it within the hour, please
          - link "contact us" [ref=e81] [cursor=pointer]:
            - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=information/contact
          - text: .
        - link "Continue" [ref=e83] [cursor=pointer]:
          - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/account
      - complementary [ref=e84]:
        - generic [ref=e85]:
          - link "My Account" [ref=e86] [cursor=pointer]:
            - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/account
          - link "Edit Account" [ref=e87] [cursor=pointer]:
            - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/edit
          - link "Password" [ref=e88] [cursor=pointer]:
            - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/password
          - link "Address Book" [ref=e89] [cursor=pointer]:
            - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/address
          - link "Wish List" [ref=e90] [cursor=pointer]:
            - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/wishlist
          - link "Order History" [ref=e91] [cursor=pointer]:
            - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/order
          - link "Downloads" [ref=e92] [cursor=pointer]:
            - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/download
          - link "Recurring payments" [ref=e93] [cursor=pointer]:
            - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/recurring
          - link "Reward Points" [ref=e94] [cursor=pointer]:
            - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/reward
          - link "Returns" [ref=e95] [cursor=pointer]:
            - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/return
          - link "Transactions" [ref=e96] [cursor=pointer]:
            - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/transaction
          - link "Newsletter" [ref=e97] [cursor=pointer]:
            - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/newsletter
          - link "Logout" [ref=e98] [cursor=pointer]:
            - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/logout
  - contentinfo [ref=e99]:
    - generic [ref=e100]:
      - generic [ref=e101]:
        - generic [ref=e102]:
          - heading "Information" [level=5] [ref=e103]
          - list [ref=e104]:
            - listitem [ref=e105]:
              - link "About Us" [ref=e106] [cursor=pointer]:
                - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=information/information&information_id=4
            - listitem [ref=e107]:
              - link "Delivery Information" [ref=e108] [cursor=pointer]:
                - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=information/information&information_id=6
            - listitem [ref=e109]:
              - link "Privacy Policy" [ref=e110] [cursor=pointer]:
                - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=information/information&information_id=3
            - listitem [ref=e111]:
              - link "Terms & Conditions" [ref=e112] [cursor=pointer]:
                - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=information/information&information_id=5
        - generic [ref=e113]:
          - heading "Customer Service" [level=5] [ref=e114]
          - list [ref=e115]:
            - listitem [ref=e116]:
              - link "Contact Us" [ref=e117] [cursor=pointer]:
                - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=information/contact
            - listitem [ref=e118]:
              - link "Returns" [ref=e119] [cursor=pointer]:
                - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/return/add
            - listitem [ref=e120]:
              - link "Site Map" [ref=e121] [cursor=pointer]:
                - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=information/sitemap
        - generic [ref=e122]:
          - heading "Extras" [level=5] [ref=e123]
          - list [ref=e124]:
            - listitem [ref=e125]:
              - link "Brands" [ref=e126] [cursor=pointer]:
                - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=product/manufacturer
            - listitem [ref=e127]:
              - link "Gift Certificates" [ref=e128] [cursor=pointer]:
                - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/voucher
            - listitem [ref=e129]:
              - link "Affiliate" [ref=e130] [cursor=pointer]:
                - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=affiliate/login
            - listitem [ref=e131]:
              - link "Specials" [ref=e132] [cursor=pointer]:
                - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=product/special
        - generic [ref=e133]:
          - heading "My Account" [level=5] [ref=e134]
          - list [ref=e135]:
            - listitem [ref=e136]:
              - link "My Account" [ref=e137] [cursor=pointer]:
                - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/account
            - listitem [ref=e138]:
              - link "Order History" [ref=e139] [cursor=pointer]:
                - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/order
            - listitem [ref=e140]:
              - link "Wish List" [ref=e141] [cursor=pointer]:
                - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/wishlist
            - listitem [ref=e142]:
              - link "Newsletter" [ref=e143] [cursor=pointer]:
                - /url: https://dweller-lumber-expulsion.ngrok-free.dev/opencart/upload/index.php?route=account/newsletter
      - separator [ref=e144]
      - paragraph [ref=e145]:
        - text: Powered By
        - link "OpenCart" [ref=e146] [cursor=pointer]:
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
  26 |         // const isRegistrationPageDisplayed = await registrationPage.isRegisterAccountPageDisplayed();
  27 |         // expect(isRegistrationPageDisplayed).toBeTruthy();
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
> 54 |         expect(boolAccountCreated).toBeTruthy();
     |                                    ^ Error: expect(received).toBeTruthy()
  55 | 
  56 |     });
  57 | 
  58 | 
  59 | 
  60 | 
  61 | 
  62 | });
```