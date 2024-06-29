import { test, expect } from '@playwright/test'

test.describe("Test Emoji Rating Slider", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("range-slider")
        await expect(page.getByRole('list').locator('img').first()).toBeVisible()
    })

    test("Verify the slider", async ({ page }) => {

        // move the slider to the first emoji
        await page.getByRole('slider').fill('23')
        await expect(page.getByRole('list').locator('img').nth(1)).toBeVisible()
        // second emoji
        await page.getByRole('slider').fill('44')
        await expect(page.getByRole('list').locator('img').nth(2)).toBeVisible()
        // third emoji
        await page.getByRole('slider').fill('62')
        await expect(page.getByRole('list').locator('img').nth(3)).toBeVisible()
        // fourth emoji
        await page.getByRole('slider').fill('86')
        await expect(page.getByRole('list').locator('img').nth(4)).toBeVisible()
    })

    test("Verify the Feedback function", async ({ page }) => {

        await page.getByRole('slider').fill('47')
        await page.getByRole('button', { name: 'Send Feedback' }).click()
        await expect(page.getByText('Thank you for your feedback!')).toBeVisible()
    })
})