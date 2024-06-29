import { test, expect } from '@playwright/test'

test.describe("Redirection Chain", () => {

    test("Verify every redirection", async ({ page }) => {

        await page.goto("redirect")
        await expect(page.getByText("Start Redirection chain")).toBeVisible()

        // REDIRECTIONS:

        // 1
        const firstRedirection = page.waitForResponse((response) => response.url().includes("second"))
        // 2
        const secondRedirection = page.waitForResponse((response) => response.url().includes("third"))
        // 3
        const thirdRedirectoin = page.waitForResponse((response) => response.url().includes("fourth"))
        // 4
        const fourthRedirection = page.waitForResponse((response) => response.url().includes("fifth"))
        // 5
        const fifthRedirection = page.waitForResponse((response) => response.url().includes("sixth"))
        // 6
        const sixthRedirection = page.waitForResponse((respons) => respons.url().includes("last"))
        // Start
        await page.getByRole('link', { name: 'Start Redirection chain' }).click()
        // await the Redirections
        await firstRedirection
        await secondRedirection
        await thirdRedirectoin
        await fourthRedirection
        await fifthRedirection
        await sixthRedirection
        // Verify last page
        await expect(page.getByText("Welcome to the Last Page")).toBeVisible()
    })
})