import { test, expect } from '@playwright/test'

test.describe('Tags input box', () => {

    let tags: any
    let inputField: any
    let currentCount: any
    
    test.beforeEach(async ({ page }) => {
        await page.goto("tags-input-box")
        await expect(page.getByRole('heading', { name: 'Tags'})).toBeVisible()

        // Initialize locators
        tags = page.locator('.content >> li')
        inputField = page.getByRole('textbox')
        currentCount = page.locator(".details >> p >> span")

    })

    test("Remove the last tag", async ({ page }) => {

        // Get locators for all the tags
        const tagsCount = await tags.count()

        // Remove the last tag
        await tags.last().locator("i").click()

        await expect(tags).toHaveCount(tagsCount - 1)
    })

    test("Add max number of tags", async ({ page }) => {

        // New tags to Add
        const newTags = [
            "python",
            "TypeScript",
            "java",
            "ruby",
            "go",
            "rust",
            "swift",
            "c#",
        ]

        const tagsCount = await tags.count()
        let remainingSlots = 10 - tagsCount

        for( let i = 0; i < 10 - tagsCount; i++ ) {
            await inputField.fill(newTags[i])
            await inputField.press("Enter", { delay: 200 })

            remainingSlots--

            await expect(tags.getByText(newTags[i], { exact: true})).toBeVisible()
            await expect(currentCount).toHaveText(remainingSlots.toString())
        }

        await expect(currentCount).toHaveText("0")
    })

    test("Remove all the tags", async ({ page }) => {

        await page.getByRole('button', { name: 'Remove All'}).click()

        await expect(currentCount).toHaveText("10")
        await expect(tags).toHaveCount(0)
    })

})