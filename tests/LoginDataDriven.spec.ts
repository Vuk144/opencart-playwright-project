import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { MyAccountPage } from '../pages/MyAccountPage';
import { DataProvider } from '../utils/dataProvider';
import { TestConfig } from '../test.config';
import { HomePage } from '../pages/HomePage';




const jsonPath="data/logindata.json";
const jsonTestData=DataProvider.getTestDataFromJSON(jsonPath);


for(const data of jsonTestData)
{
   test(`TC_1 Verify user login with JSON data - ${data.testName} @datadriven`, async({page})=>{
      // Description: Verify user login with various credentials provided from JSON data
      // Author: Vuk Nedeljkovic
      // Date: 04.22.2026
        const config = new TestConfig(); // create instance
        await page.goto(config.appUrl);    // getting appURL from test.config.ts file

        const homePage = new HomePage(page);
        await homePage.goToLoginPage();

        const loginPage = new LoginPage(page);
        await loginPage.login(data.email, data.password);

        if(data.expected.toLowerCase()==='successful')
        {
            const myAccountPage=new MyAccountPage(page);
            const isLoggedIn=await myAccountPage.isMyAccountPageExists();
            expect(isLoggedIn).toBeTruthy();

        }
        else{
            const errorMessage=await loginPage.isLoginPageDisplayed();
            //expect(errorMessage).toBe('Warning: No match for E-Mail Address and/or Password.');
            expect(errorMessage).toBeTruthy();
        }
    })

}



