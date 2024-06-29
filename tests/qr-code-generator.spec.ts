import { test, expect } from '@playwright/test'

test.describe("QR Code Generator", () => {

    test("Verify the generated QR code image", async ({ page }) => {

        await page.goto("qr-code-generator")

        await expect(page.getByText("QR Code Generator")).toBeVisible()

        await page.getByPlaceholder("Enter text or URL").fill("Tester")
        await page.getByRole('button', { name: "Generate QR Code"}).click()

        await expect(page.getByRole('img', { name: 'qr-code' })).toBeVisible()

    })
})