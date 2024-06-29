import { test, expect } from '@playwright/test'

test.describe("Test Availability of Links", () => {

    let links:any
    
    test.beforeEach(async ({ page }) => {

        await page.goto('links')
        await expect(page).toHaveTitle("Test Availability Of Links")
        links = page.locator("#nav").getByRole("link")
        await expect(links).toHaveCount(5)

    })

    test("Open new tabs from the Menu", async ({ context }) => {

         // Create a new tab page
        const newPage = await context.newPage()

         // Loop through each link, open it in the new tab, and verify its content
        for(let i = 0; i < (await links.count()); i ++) {

            const menuItemLink = await links.nth(i).getAttribute("href")
            await newPage.goto("links/" + menuItemLink)

            const newPageTitle = await newPage.title()
            console.log("Title of the page: " + newPageTitle)
        }
        newPage.close()
    })

    test("Open all the menu links by clicking on it", async ({ page }) => {

        for(let i = 0; i < (await links.count()); i ++) {

            // Click
            await links.nth(i).click({ delay: 300 })
            
            const pageTitle = await page.title()
            console.log("Title of the page: " + pageTitle)
            // Return to the page
            await page.goBack()
        }
    })
})