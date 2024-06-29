import { test, expect } from '@playwright/test'

test.describe('Context menu', () => {

    test("Click on each menu and sub-menu item", async ({ page }) => {

        await page.goto('context-menu')
        await expect(page.getByText('Open Right-Click Context Menu')).toBeVisible()

        const menuItems = ["Preview", "Get Link", "Rename", "Delete", "Settings"]
        const subMenuItems = ["Twitter", "Instagram", "Dribble", "Telegram"]
        const message = page.getByRole('main')

        // Validate Menu Items
        for( let i = 0; i < menuItems.length; i ++) {
            await page.click("body", { button: "right", delay: 300 })
            await page.getByText(menuItems[i]).click()
            await expect(message).toContainText(menuItems[i])
        }

        // Validate Sub-Menu Items
        for( let i = 0; i < subMenuItems.length; i ++) {
            await(page.click("body", {button: "right", delay: 300}))
            await page.getByText('Share').hover()
            await page.getByText(subMenuItems[i]).click()
            await expect(message).toContainText(subMenuItems[i])
        }
    })
})