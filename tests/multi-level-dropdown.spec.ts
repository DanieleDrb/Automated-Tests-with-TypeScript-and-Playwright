import { test, expect } from '@playwright/test'

test.describe("Multi level dropdown", () => {

    let links: any

    test.beforeEach(async ({ page }) => {
        await page.goto('multi-level-dropdown')
        await expect(page.locator(".navbar-nav")).toBeVisible()
        await page.locator(".icon-button").nth(3).click()

        links = page.locator(".menu-secondary-enter-done >> a:visible")
    })

    test("Verify the Settings sub-menu items", async ({ page }) => {

        await page.getByText("Settings").click()

        await expect(page.locator(".menu-item")).toHaveText([
            "My Tutorial","HTML","CSS","JavaScript","Awesome!",
        ])

        const linkCount = await links.count()

        await expect(links).not.toHaveCount(0)

        const expectedLinks = [
            "#main","#!HTML","#!CSS","#!JavaScript","#!Awesome",
        ]

        for( let i = 0; i < linkCount; i++) {
            await expect(links.nth(i)).toHaveAttribute('href', expectedLinks[i])
        }

    })

    test('Verify the Animals sub-menu items', async ({ page }) => {

        await page.getByText("Animals").click()

        await expect(page.locator(".menu-item")).toHaveText([
            "Animals","🦘Kangaroo","🐸Frog","🦋Horse","🦔Hedgehog",
        ])

        const linkCount = await links.count()
        await expect(links).not.toHaveCount(0)

        const expectedLinks = ["#main", "#!Kangaroo", "#!Frog", "#!Horse", "#!Hedgehog"]

        for ( let i = 0; i < linkCount; i++) {
            await expect(links.nth(i)).toHaveAttribute('href', expectedLinks[i])
        }
    })
})