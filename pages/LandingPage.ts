import { Page } from "@playwright/test";

export default class landingPage {
  constructor(public page: Page) {}

  async clickLogin() {
    await Promise.all([
      this.page.waitForNavigation({ waitUntil: "networkidle" }),
      this.page.getByRole("link", { name: "Log In" }).click(),
    ]);
  }
}
