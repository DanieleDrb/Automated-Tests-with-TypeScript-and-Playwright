import { test, expect } from '@playwright/test'

test.describe('Pop up', () => {
    test('Open a pop-up window and click submit in it', async ({ page }) => {

        await page.goto('popup')
        await expect(page.getByText('Click to open pop-up')).toBeVisible()

        const page1Promise = page.waitForEvent('popup')

        await page.getByRole('link', { name: 'Open' }).click()

        const page1 = await page1Promise
        await page1.getByRole('button', { name: 'Submit' }).click()
        
    })
})