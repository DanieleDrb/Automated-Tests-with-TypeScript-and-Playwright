import { test, expect } from '@playwright/test'

test.describe('Verify your Account', () => {
    test.beforeEach(async ({ page }) => {
        // Warning: Need to clear storage and cookies to run both tests in the same time
        await page.goto("verify-account")
        await page.evaluate( () => localStorage.clear())
        await page.context().clearCookies()
    })

    test('Solve verification code by typing numbers', async ({ page }) => {
        await page.goto("verify-account")
        await expect(page.getByRole('heading', { name: 'Verify Your Account'})).toBeVisible()

        const codeFields = page.locator(".code")

        for(let i = 0; i < (await codeFields.count()); i++) {
            codeFields.nth(i).type("9")  // Warning: works only with type !!
            await expect(codeFields.nth(i)).toHaveValue("9")
        }

        await expect(page.getByText('Success')).toBeVisible()
    })

    test('Solve verification code by pressing the key-up button', async ({ page }) => {
        await page.goto("verify-account")
        await expect(page.getByRole('heading', { name: 'Verify Your Account'})).toBeVisible()

        let codeValue = "0"
        const codeFields = page.locator(".code")

        for(let i = 0; i < (await codeFields.count()); i++) {
            while(codeValue != "9") {
                await codeFields.nth(i).press("ArrowUp", { delay: 100 })
                codeValue = await codeFields.nth(i).inputValue()
            }
            await expect(codeFields.nth(i)).toHaveValue("9")
            codeValue = "0"
        }

        await expect(page.getByText('Success')).toBeVisible()
    })
})