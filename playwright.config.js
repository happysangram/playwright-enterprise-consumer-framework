import { defineConfig } from "@playwright/test";
import baseConfig from "@chinturishi/playwright-enterprise-core-framework/config/playwright";

export default defineConfig({
  ...baseConfig,
  testDir: "./tests",
  use: {
    ...baseConfig.use,
    baseURL: "https://opensource-demo.orangehrmlive.com",
  },
});
