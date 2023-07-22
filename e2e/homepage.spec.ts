import { expect, test } from "@playwright/test";

test("should have hero text", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("h1")).toContainText(
    "Sign up and start earning rewards, today!"
  );
});

test("should have leading text", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("p")).toContainText(
    `Are you ready to embark on an exciting journey of rewards and
    referrals? Sign up now to unlock a world of possibilities! With our
    Referral Program, every step you take brings you closer to incredible rewards.`
  );
});

test("get started link", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Get Started" }).click();
  await expect(page).toHaveURL(/.*signup/);
});

test("login link", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Log in" }).click();
  await expect(page).toHaveURL(/.*signin/);
});
