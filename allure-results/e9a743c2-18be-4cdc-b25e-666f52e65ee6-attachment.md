# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accountLogin.spec.ts >> Account Login Tests >> TC_03 Verify that user cannot login with invalid credentials @master @sanity @regression
- Location: tests\accountLogin.spec.ts:44:9

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - main [ref=e2]:
    - generic [ref=e3]:
      - heading "demo.opencart.com" [level=1] [ref=e5]
      - heading "Performing security verification" [level=2] [ref=e6]
      - paragraph [ref=e7]: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
  - contentinfo [ref=e14]:
    - generic [ref=e16]:
      - generic [ref=e18]:
        - text: "Ray ID:"
        - code [ref=e19]: 9eede8eacf8a0d4f
      - generic [ref=e20]:
        - generic [ref=e21]:
          - text: Performance and Security by
          - link "Cloudflare" [ref=e22] [cursor=pointer]:
            - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=j
        - link "Privacy" [ref=e24] [cursor=pointer]:
          - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
  1  | import { expect, test } from "@playwright/test";
  2  | import { HomePage } from "../pages/HomePage";
  3  | import { LoginPage } from "../pages/LoginPage";
  4  | import { AccountPage } from "../pages/AccountPage";
  5  | import { TestConfig } from "../test.config";
  6  | import { RandomDataUtil } from "../utils/randomDataGenerator";  
  7  | 
  8  | 
  9  | let homePage: HomePage;
  10 | let loginPage: LoginPage;
  11 | let accountPage: AccountPage;
  12 | let testConfig: TestConfig;
  13 | 
  14 | 
  15 | test.beforeEach(async ({page}) => {
  16 |     homePage = new HomePage(page);
  17 |     loginPage = new LoginPage(page);
  18 |     accountPage = new AccountPage(page);
  19 |     testConfig = new TestConfig();
  20 | 
  21 |     await page.goto(testConfig.appUrl);
  22 | });
  23 | 
  24 | test.describe("Account Login Tests", () => {
  25 |     test("TC_01 Verify that user can navigate to login page @master @sanity @regression", async ({}) => {
  26 |         const isHomePageDisplayed = await homePage.isHomePageDisplayed();
  27 |         expect(isHomePageDisplayed).toBeTruthy();
  28 |         await homePage.goToLoginPage();
  29 |         const isLoginPageDisplayed = await loginPage.isLoginPageDisplayed();
  30 |         expect(isLoginPageDisplayed).toBeTruthy();
  31 |     });
  32 | 
  33 |     test("TC_02 Verify that user can login with valid credentials @master @sanity @regression", async ({}) => {
  34 |         const isHomePageDisplayed = await homePage.isHomePageDisplayed();
  35 |         expect(isHomePageDisplayed).toBeTruthy();
  36 |         await homePage.goToLoginPage();
  37 |         let isLoginPageDisplayed = await loginPage.isLoginPageDisplayed();
  38 |         expect(isLoginPageDisplayed).toBeTruthy();
  39 |         await loginPage.login(testConfig.email, testConfig.password);
  40 |         const isAccountPageDisplayed = await accountPage.isAccountPageDisplayed();
  41 |         expect(isAccountPageDisplayed).toBeTruthy();
  42 |     });
  43 | 
  44 |     test("TC_03 Verify that user cannot login with invalid credentials @master @sanity @regression", async ({}) => {
  45 |         const isHomePageDisplayed = await homePage.isHomePageDisplayed();
> 46 |         expect(isHomePageDisplayed).toBeTruthy();
     |                                     ^ Error: expect(received).toBeTruthy()
  47 |         await homePage.goToLoginPage();
  48 |         let isLoginPageDisplayed = await loginPage.isLoginPageDisplayed();
  49 |         expect(isLoginPageDisplayed).toBeTruthy();
  50 |         await loginPage.login(RandomDataUtil.generateRandomEmail(), RandomDataUtil.generateRandomPassword());
  51 |         const isAccountPageDisplayed = await accountPage.isAccountPageDisplayed();
  52 |         expect(isAccountPageDisplayed).toBeFalsy();
  53 |     });
  54 | });
  55 | 
  56 | 
  57 | 
```