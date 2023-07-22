import { defineConfig } from "@playwright/test";

export default defineConfig({
  use: {
    // Base URL to use in actions like `await page.goto('/')`.
    baseURL: "http://localhost:3000",

    // Collect trace when retrying the failed test.
    trace: "on-first-retry",
  },
});
