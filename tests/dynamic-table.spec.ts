import { test, expect } from '@playwright/test'

test.describe('Dynamic Table', () => {
    test("Should verify Deadpool's real name", async ({ page }) => {
        await page.goto('dynamic-table')
        // Verify the Table Header
        await expect(page.getByText('SUPERHERO')).toBeVisible()
        // Locating the Deadpool row
        const realName = "Wade Wilson"
        const row = page.locator('text="Deadpool" >> xpath=../../../..')
        // Locating the real name cell
        const realNameCell = row.locator("td").nth(2)
        // Aserting the real name
        await expect(realNameCell).toHaveText(realName)
    })
})