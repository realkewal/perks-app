import { expect, test } from "@playwright/test";

test("should have sign up text", async ({ page }) => {
  await page.goto("/signup");
  await expect(page.locator("h2")).toContainText("Sign up for a Perks account");
});

test("should have sign up button", async ({ page }) => {
  await page.goto("/signup");
  const signUpBtn = await page.getByRole("button", { name: "Sign up" });
  await expect(signUpBtn).toHaveText(/Sign up/);
});

test("should have working login link", async ({ page }) => {
  await page.goto("/signup");
  await page.getByRole("link", { name: "Log in" }).click();
  await expect(page).toHaveURL(/.*signin/);
});
