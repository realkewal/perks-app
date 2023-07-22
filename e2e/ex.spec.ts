import { expect, test } from "@playwright/test";

test("should detect welcome text", async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("/");
  await expect(page.locator("h1")).toContainText("Welcome to Next.js");
});
