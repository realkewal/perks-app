import { expect, test } from "@playwright/test";

test("should connect to database", async ({ request }) => {
  const response = await request.get(`/api/db-healthcheck`);
  expect(response.status()).toBe(200);
});
