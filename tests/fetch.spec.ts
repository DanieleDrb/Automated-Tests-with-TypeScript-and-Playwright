import { test, expect } from '@playwright/test'

test.describe("Test Fetching Data", () => {

    test("Load and Display all posts", async ({ page }) => {

        await page.goto("fetch", { waitUntil: "commit"})

        await page.waitForResponse((resp) => resp.url().includes("/posts"))

        expect(await page.locator(".icard").count()).toBeGreaterThan(90)
    })
})