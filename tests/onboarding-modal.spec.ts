import { test, expect } from '@playwright/test'

test.describe("Onboarding Model", () => {

    test("If is present close Onboarding Modal", async ({ page }) => {

        await page.goto("onboarding-modal")

        const onboardingModel = page.getByRole('link', { name: 'Welcome on board!' })
        const closeButton = page.locator('i')

        if(onboardingModel) {
            await closeButton.click()
            await expect(page.getByText("Welcome Peter Parker! 🕷🎉")).toBeVisible()
        } else {
            await expect(page.getByText("Application successfully launched! 🚀")).toBeVisible()
        }

    })
})