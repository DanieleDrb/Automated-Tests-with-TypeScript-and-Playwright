import { test, expect } from '@playwright/test'

test.describe("Covered Elements", () => {

    test("Click on the hidden button", async ({ page }) => {

        await page.goto("covered")
        await expect(page.getByText('Click the button below')).toBeVisible()

        await page.getByRole('link', { name: '🐦You found me!' }).click()
        await expect(page.getByText('Mission accomplished')).toBeVisible()
    })
})