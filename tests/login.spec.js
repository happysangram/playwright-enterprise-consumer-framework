import { test, expect } from "@chinturishi/playwright-enterprise-core-framework/fixtures";
import { LoginPage } from "../pages/login.page.js";
import { validCredentials, invalidCredentials, urls } from "../data/login.data.js";

test.describe("OrangeHRM Login @smoke", () => {
  let loginPage;

  test.beforeEach(async ({ frameworkPage, logger }) => {
    logger.info("Starting login test setup");
    loginPage = new LoginPage(frameworkPage);
    await loginPage.navigate(urls.login);
    logger.info("Login page loaded successfully");
  });

  test("should display the login page with correct title", async () => {
    const title = await loginPage.getTitle();
    expect(title).toContain("OrangeHRM");
  });

  test("should login successfully with valid credentials", async () => {
    await loginPage.login(validCredentials.username, validCredentials.password);
    await loginPage.waitForUrl("**/dashboard/**", { timeout: 15000 });
    await loginPage.waitForVisible("dashboard", { timeout: 10000 });

    const isDashboard = await loginPage.isDashboardVisible();
    expect(isDashboard).toBe(true);
  });

  test("should show error message with invalid credentials", async () => {
    await loginPage.login(invalidCredentials.username, invalidCredentials.password);

    await loginPage.waitForVisible("errorMessage", { timeout: 10000 });
    const errorText = await loginPage.getErrorMessage();
    expect(errorText).toContain("Invalid credentials");
  });
});
