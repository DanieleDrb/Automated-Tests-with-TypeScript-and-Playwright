import { test, expect } from '@playwright/test'

test.describe("Rating", () => {

    let message1: any
    let message2: any
    let stars: any

    test.beforeEach(async ({ page }) => {
        await page.goto('rating')
        await expect(page.locator('span').nth(1)).toBeVisible()


        stars = page.locator('label')
        message1 = page.locator('span').nth(1)
        message2 = page.locator('span').nth(2)
    })

    test("Rate with one star", async ({ page }) => {

        await stars.nth(0).click()
        // Verify the selected star, and emoji
        await expect((stars).nth(0)).toHaveCSS("color", "rgb(255, 221, 68)")

        // Verify the messages displayed are present
        await expect(message1).toBeVisible()
        await expect(message2).toBeVisible()
    })

    test("Rate with two stars", async ({ page }) => {

        // Select the second start and verify the emoji
        await stars.nth(1).click()
        await expect(page.locator('li:nth-child(2) > img')).toBeVisible()
        // Verify the messages displayed are present
        await expect(message1).toBeVisible()
        await expect(message2).toBeVisible()
    })

    test("Rate with three stars", async ({ page }) => {

        await stars.nth(2).click()
        await expect(page.locator('li:nth-child(3) > img')).toBeVisible()

        // Verify the messages displayed are present
        await expect(message1).toBeVisible()
        await expect(message2).toBeVisible()
    })

    test("Rate with four stars", async ({ page }) => {

        await stars.nth(3).click()
        await expect(page.locator('li:nth-child(4) > img')).toBeVisible()

        // Verify the messages displayed are present
        await expect(message1).toBeVisible()
        await expect(message2).toBeVisible()
    })

    test("Rate with five stars", async ({ page }) => {

        await stars.nth(4).click()
        await expect(page.locator('li:nth-child(5) > img')).toBeVisible()

        // Verify the messages displayed are present
        await expect(message1).toBeVisible()
        await expect(message2).toBeVisible()
    })
}) 