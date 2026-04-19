import { test, expect } from "@playwright/test";

test.describe("Products Page", () => {
  test("should load products page", async ({ page }) => {
    await page.goto("/products");
    await expect(page).toHaveTitle(/产品/);
  });

  test("should display all 3 products", async ({ page }) => {
    await page.goto("/products");
    await expect(page.getByText("AIEmployee")).toBeVisible();
    await expect(page.getByText("Agent Workers")).toBeVisible();
    await expect(page.getByText("TaskFlow")).toBeVisible();
  });

  test("should navigate to AIEmployee detail page", async ({ page }) => {
    await page.goto("/products");
    await page.getByRole("link", { name: /AIEmployee/ }).first().click();
    await expect(page).toHaveURL("/products/aiemployee");
    await expect(page.getByText("AIEmployee")).toBeVisible();
  });

  test("should display product features on detail page", async ({ page }) => {
    await page.goto("/products/aiemployee");
    await expect(page.getByText("产品特性")).toBeVisible();
    await expect(page.getByText("多场景AI员工模板")).toBeVisible();
  });
});

test.describe("Pricing Page", () => {
  test("should load pricing page", async ({ page }) => {
    await page.goto("/pricing");
    await expect(page).toHaveTitle(/定价/);
  });

  test("should display three pricing tiers", async ({ page }) => {
    await page.goto("/pricing");
    await expect(page.getByText("Starter")).toBeVisible();
    await expect(page.getByText("Professional")).toBeVisible();
    await expect(page.getByText("Enterprise")).toBeVisible();
  });

  test("should display FAQ section", async ({ page }) => {
    await page.goto("/pricing");
    await expect(page.getByText("常见问题")).toBeVisible();
  });
});

test.describe("About Page", () => {
  test("should load about page", async ({ page }) => {
    await page.goto("/about");
    await expect(page).toHaveTitle(/关于我们/);
  });

  test("should display team members", async ({ page }) => {
    await page.goto("/about");
    await expect(page.getByText("李明")).toBeVisible();
    await expect(page.getByText("张华")).toBeVisible();
  });

  test("should display timeline", async ({ page }) => {
    await page.goto("/about");
    await expect(page.getByText("发展历程")).toBeVisible();
  });
});

test.describe("Contact Page", () => {
  test("should load contact page", async ({ page }) => {
    await page.goto("/contact");
    await expect(page).toHaveTitle(/联系我们/);
  });

  test("should display contact form", async ({ page }) => {
    await page.goto("/contact");
    await expect(page.getByLabel("姓名")).toBeVisible();
    await expect(page.getByLabel("邮箱")).toBeVisible();
    await expect(page.getByLabel("留言内容")).toBeVisible();
  });

  test("should submit contact form", async ({ page }) => {
    await page.goto("/contact");
    await page.getByLabel("姓名").fill("张三");
    await page.getByLabel("邮箱").fill("zhangsan@example.com");
    await page.getByLabel("留言内容").fill("我想了解产品定价");
    await page.getByRole("button", { name: "发送消息" }).click();
    await expect(page.getByText("消息已发送")).toBeVisible();
  });
});

test.describe("Blog Page", () => {
  test("should load blog page", async ({ page }) => {
    await page.goto("/blog");
    await expect(page).toHaveTitle(/博客/);
  });

  test("should display blog posts", async ({ page }) => {
    await page.goto("/blog");
    await expect(page.getByText("AIEmployee 如何助力企业数字化转型")).toBeVisible();
  });

  test("should navigate to blog post", async ({ page }) => {
    await page.goto("/blog");
    await page.getByRole("link", { name: /阅读全文/ }).first().click();
    await expect(page).toHaveURL(/\/blog\//);
  });
});

test.describe("FAQ Page", () => {
  test("should load FAQ page", async ({ page }) => {
    await page.goto("/faq");
    await expect(page).toHaveTitle(/常见问题/);
  });

  test("should display FAQ categories", async ({ page }) => {
    await page.goto("/faq");
    await expect(page.getByText("产品相关")).toBeVisible();
    await expect(page.getByText("技术相关")).toBeVisible();
  });
});
