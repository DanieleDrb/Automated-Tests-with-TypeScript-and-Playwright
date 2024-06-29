import { test, expect } from '@playwright/test'

test.describe('New tab', () => {
    test('Verify the new tab opens', async ({ page }) => {
        await page.goto('new-tab')

        const pagePromise = page.waitForEvent('popup')
        await page.getByRole('link', { name: 'Open New Tab' }).click()

        const newPage = await pagePromise
        await expect(newPage.getByRole('heading', { name: "Welcome to the new page!" }))
        .toBeVisible()
        
    })
})