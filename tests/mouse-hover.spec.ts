import { test, expect } from '@playwright/test'

test.describe('Mouse Hover tests', () => {

    test('Mouse pointer on Image', async ({ page }) => {

        await page.goto("mouse-hover")

        const image = page.getByRole('main').getByRole('link')
        const newPrice = "$24.96"

        await expect(image).toBeVisible()
        
        await image.hover()
        await expect(page.getByText(newPrice)).toBeVisible()

    })
})