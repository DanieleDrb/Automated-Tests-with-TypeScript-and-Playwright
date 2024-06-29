import { defineConfig, devices } from '@playwright/test';
import { OrtoniReportConfig } from 'ortoni-report'

const reportConfig: OrtoniReportConfig = {
  projectName: "Automation Tests Playground",
  testType: "Study Material",
  authorName: "DanieleDrb",
  preferredTheme: "dark"
}

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : 2,
  reporter: [["ortoni-report", reportConfig], ["dot"]],
  use: {
    actionTimeout: 10000,
    navigationTimeout: 10000,
    baseURL: 'https://qaplayground.dev/apps/',
    trace: 'on',
    screenshot: 'on'
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],
});
