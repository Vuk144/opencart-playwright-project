import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { TestConfig } from '../test.config';

const config = new TestConfig();

test.describe('Homepage UI and features', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(config.appUrl);
  });

  test('TC_1 Homepage loads and displays logo and navigation', async ({ page }) => {
    const home = new HomePage(page);
    expect(await home.isLogoVisible()).toBe(true);
    expect(await home.isNavigationVisible()).toBe(true);
  });

  test('TC_2 Search for a product and verify results', async ({ page }) => {
    const home = new HomePage(page);
    await home.enterProductName(config.productName);
    await home.clickSearchButton();
    // Assert that search results are shown
    const results = await page.locator('.product-thumb').count();
    expect(results).toBeGreaterThan(0);
  });

  test('TC_3 Featured products are visible with correct name and price', async ({ page }) => {
    const home = new HomePage(page);
    expect(await home.areFeaturedProductsVisible()).toBe(true);
    const names = await home.getFeaturedProductNames();
    const prices = await home.getFeaturedProductPrices();
    expect(names.length).toBeGreaterThan(0);
    expect(prices.length).toBeGreaterThan(0);
    expect(names).toContain(config.productName);
  });
});
