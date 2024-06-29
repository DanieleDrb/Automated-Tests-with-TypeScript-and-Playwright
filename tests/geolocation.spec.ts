import { test, expect } from '@playwright/test'

test.describe("Geo Location test", () => {

    test("Change browser geolocation", async ({ page, context }) => {

        await context.grantPermissions(["geolocation"])
        await context.setGeolocation({ longitude: 11.878107, latitude: 43.463283})

        await page.goto('geolocation')
        const locationButton = page.getByRole('button', { name: 'Get Location' })
        await expect(locationButton).toBeVisible()

        await locationButton.click()
        const location = page.locator("#location-info")
        await expect(location).toContainText("Arezzo, Italy")
    })
})