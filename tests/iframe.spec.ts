import { test, expect } from '@playwright/test'

test.describe("Nested iFrames", () => {
    
    test("Click on the button inside the two-level nested iframes", async ({ page }) => {
        await page.goto('iframe')
        // Verify the first frame 
        await expect(page.frameLocator('iframe[name="frame1"]')
        .getByText('First Level Iframe')).toBeVisible()
        // Verify the second frame 
        await expect(page.frameLocator('iframe[name="frame1"]').frameLocator('iframe[name="frame2"]')
        .getByText('Second Level Iframe')).toBeVisible()

        // Click the button
        await page.frameLocator('iframe[name="frame1"]').frameLocator('iframe[name="frame2"]')
        .getByRole('link', { name: 'Click Me' }).click()

        // Verify that the button is clicked
        await expect(page.frameLocator('iframe[name="frame1"]').frameLocator('iframe[name="frame2"]').getByText('Button Clicked'))
        .toBeVisible()
    })
})
