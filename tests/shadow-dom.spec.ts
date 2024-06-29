import { test, expect } from '@playwright/test'

test.describe("Shadown DOM", () => {

    test("Boost bar is progressing by clicking on the button", async ({ page }) => {

        await page.goto('shadow-dom')
        const btn = page.getByRole('button', { name: 'Boost 🚀' })
        
        await expect(btn).toBeVisible()
        await btn.click()

        const progressBar = page.locator("progress-bar")

        await expect(progressBar).toHaveAttribute("percent", "95", { timeout: 9000 })
    })
})