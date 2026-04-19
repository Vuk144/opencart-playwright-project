# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Logout.spec.ts >> TC_04 Verify that user can logout successfully @master @regression
- Location: tests\Logout.spec.ts:32:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Test source

```ts
  1  | import {Page, expect, test} from '@playwright/test';
  2  | import { HomePage } from '../pages/HomePage';
  3  | import { MyAccountPage } from '../pages/MyAccountPage';
  4  | import { TestConfig } from '../test.config';
  5  | import { LoginPage } from '../pages/LoginPage';
  6  | import { LogoutPage } from '../pages/LogoutPage';
  7  | 
  8  | 
  9  | let testConfig : TestConfig;
  10 | let homePage : HomePage;
  11 | let myAccountPage : MyAccountPage;
  12 | let loginPage : LoginPage;
  13 | let logoutPage : LogoutPage;
  14 | 
  15 | test.beforeEach(async ({page}) => {
  16 |     homePage = new HomePage(page);
  17 |     loginPage = new LoginPage(page);
  18 |     myAccountPage = new MyAccountPage(page);
  19 |     loginPage = new LoginPage(page);
  20 |     logoutPage = new LogoutPage(page);
  21 |     testConfig = new TestConfig();
  22 |     
  23 |     await page.goto(testConfig.appUrl);
  24 |     let isHomePageVisible = await homePage.isHomePageDisplayed();
  25 |     expect(isHomePageVisible).toBeTruthy();
  26 | });
  27 | 
  28 | test.afterEach(async ({page}) => {
  29 |     await page.close();
  30 | });
  31 | 
  32 | test('TC_04 Verify that user can logout successfully @master @regression', async ({}) => {
  33 |     // TODO: Add logout test implementation
  34 |     await homePage.goToLoginPage();
  35 |     let isLoginPageVisible = await loginPage.isLoginPageDisplayed();
  36 |     expect(isLoginPageVisible).toBeTruthy();
  37 |     await loginPage.login(testConfig.email, testConfig.password);
  38 |     let isMyAccountPageVisible = await myAccountPage.isMyAccountPageExists();
  39 |     expect(isMyAccountPageVisible).toBeTruthy();
  40 |     await myAccountPage.clickLogout();
  41 |     let isContinueButtonVisible = await myAccountPage.isMyAccountPageExists();
> 42 |     expect(isContinueButtonVisible).toBeTruthy();
     |                                     ^ Error: expect(received).toBeTruthy()
  43 |     await logoutPage.clickContinue();
  44 |     let isHomePageVisible = await homePage.isHomePageDisplayed();
  45 |     expect(isHomePageVisible).toBeTruthy();
  46 |     
  47 | });
```