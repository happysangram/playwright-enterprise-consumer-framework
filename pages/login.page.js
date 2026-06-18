import { BasePage } from "@chinturishi/playwright-enterprise-core-framework/pages";

export class LoginPage extends BasePage {
  readyLocator = "username";

  locators = {
    username: { placeholder: "Username" },
    password: { placeholder: "Password" },
    loginButton: { role: "button", options: { name: " Login " } },
    dashboard: { css: ".oxd-topbar-header-breadcrumb" },
    errorMessage: { css: ".oxd-alert-content-text" },
  };

  async login(username, password) {
    await this.fill("username", username);
    await this.fill("password", password);
    await this.click("loginButton");
  }

  async getErrorMessage() {
    return this.getText("errorMessage");
  }

  async isDashboardVisible() {
    return this.isVisible("dashboard");
  }
}
