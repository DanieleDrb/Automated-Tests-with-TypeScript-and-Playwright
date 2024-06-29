import { test, expect } from '@playwright/test'
import { error } from 'console'
import fs from 'fs'

test.describe("Download", () => {

    test("Download a PDF file", async ({ page }) => {

        await page.goto('download')

        await expect(page.getByText("Click to download PDF file")).toBeVisible()

        const dwonloadButton = page.getByRole('link', { name: 'Download ⏬' })

        // WARNING: Promise.all prevents a race condition between clicking and waiting for the download !!!
        const [download] = await Promise.all([
            // Call waitForEvent before click download to set up waiting
            page.waitForEvent('download'),
            // Triggers the download
            dwonloadButton.click()
        ])

        // Returns the file name from the server
        const fileName = download.suggestedFilename()
        // Verify the file name to be correct
        expect(fileName).toMatch('sample.pdf')

        // Save downloaded file
        await download.saveAs(fileName)

        // Get saved file size
        const fileSizeInBytes = fs.statSync(fileName).size
        // Verify file size
        expect(fileSizeInBytes.toString()).toMatch("1042157")

        // Delete downloaded file
        fs.unlink(fileName, (error) => {
            if(error) throw error
            // if no error file has been deleted successfully
            console.log("File deleted !!!")
        })

    })
})