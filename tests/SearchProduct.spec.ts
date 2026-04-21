
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SearchResultsPage } from '../pages/SearchResultsPage';
import { TestConfig } from '../test.config';

// Declare reusable variables
let config: TestConfig;
let homePage: HomePage;
let searchResultsPage: SearchResultsPage;


test.beforeEach(async ({ page }) => {
  config = new TestConfig(); 
  await page.goto(config.appUrl); 


  homePage = new HomePage(page);
  searchResultsPage = new SearchResultsPage(page);
});


test.afterEach(async ({ page }) => {
  await page.close(); 
});

test('TC_1 Verify that user can search for a product and find it in the search results @master @regression', async () => {
  // Description: Verify that user can search for a product and find it in the search results
  // Author: Vuk Nedeljkovic
  // Date: 04.21.2026
  const productName = config.productName;


  await homePage.enterProductName(productName);
  await homePage.clickSearch();

  expect(await searchResultsPage.isSearchResultsPageExists()).toBeTruthy();

 
  const isProductFound = await searchResultsPage.isProductExist(productName);
  expect(isProductFound).toBeTruthy();
});
