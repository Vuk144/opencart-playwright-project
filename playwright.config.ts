import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  timeout: 30 * 3000, 
  testDir: './tests',
  fullyParallel: false,
  //retries: process.env.CI ? 2 : 0,
  retries: 3,
  //workers: process.env.CI ? 1 : undefined,
  workers: 1,

  reporter: [
    ['html'], 
    ['allure-playwright'],
    ['dot'],
    ['list']
  ],

  use: {
    extraHTTPHeaders: 
    {
    "ngrok-skip-browser-warning": "true"
    },
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    //headless: false,
    viewport: { width: 1280, height: 720 }, // Set default viewport size for consistency
    ignoreHTTPSErrors: true, // Ignore SSL errors if necessary
    permissions: ['geolocation'], // Set necessary permissions for geolocation-based tests
  },

  //grep: /@master/,

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});