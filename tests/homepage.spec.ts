import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test("should load the homepage", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/aiagents/);
  });

  test("should display hero section", async ({ page }) => {
    await page.goto("/");
    const hero = page.locator("section").first();
    await expect(hero).toBeVisible();
  });

  test("should display navigation header", async ({ page }) => {
    await page.goto("/");
    const header = page.locator("header");
    await expect(header).toBeVisible();
    await expect(page.getByText("aiagents")).toBeVisible();
  });

  test("should display footer", async ({ page }) => {
    await page.goto("/");
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();
  });

  test("should have navigation links", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("link", { name: "首页" })).toBeVisible();
    await expect(page.getByRole("link", { name: "产品" })).toBeVisible();
    await expect(page.getByRole("link", { name: "定价" })).toBeVisible();
    await expect(page.getByRole("link", { name: "博客" })).toBeVisible();
  });

  test("should display products section", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("AIEmployee")).toBeVisible();
    await expect(page.getByText("Agent Workers")).toBeVisible();
    await expect(page.getByText("TaskFlow")).toBeVisible();
  });

  test("should display testimonials section", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("客户怎么说")).toBeVisible();
  });

  test("should navigate to products page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "产品" }).first().click();
    await expect(page).toHaveURL("/products");
    await expect(page.getByText("产品概览")).toBeVisible();
  });

  test("should navigate to pricing page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "定价" }).click();
    await expect(page).toHaveURL("/pricing");
    await expect(page.getByText("简单透明的定价")).toBeVisible();
  });
});
