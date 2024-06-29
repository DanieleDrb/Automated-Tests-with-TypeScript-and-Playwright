import { test, expect } from '@playwright/test'
import path from 'path'

test.describe("Upload image", () => {

    test("Upload an image file", async ({ page }) => {

        await page.goto("upload")
        await expect(page.getByText("No File Selected")).toBeVisible()

         // Resolve the file path
        const filePath = path.resolve("D:/Desktop/MonkeyDLuffy1.jpg")

          // Log file path for debugging
        console.log("Uploading file from path:", filePath)

         // Select one file to upload
        await page.setInputFiles('#file-input', filePath)

        await expect(page.getByText('File Selected')).toBeVisible()
        await expect(page.locator('figcaption')).toContainText('MonkeyDLuffy1.jpg')
     })

     test("Uplodat two image files", async ({ page }) => {

        await page.goto("upload")
        await expect(page.getByText("No File Selected")).toBeVisible()

        const filePath1 = path.resolve("D:/Desktop/MonkeyDLuffy1.jpg")
        const filePath2 = path.resolve("D:/Desktop/MonkeyDLuffy2.png")

        // select and verify the first file
        await page.setInputFiles('#file-input', filePath1)
        await expect(page.getByText('File Selected')).toBeVisible()
        await expect(page.locator('figcaption')).toContainText('MonkeyDLuffy1.jpg')

        // select and verify the second file
        await page.setInputFiles('#file-input', filePath2)
        await expect(page.getByText('File Selected')).toBeVisible()
        await expect(page.locator('figcaption')).toContainText('MonkeyDLuffy2.png')

     })
})