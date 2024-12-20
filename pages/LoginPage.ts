import { expect, Page } from "@playwright/test";

export default class LoginPage {
  constructor(public page: Page) {}

  async verifyLoginPageHeading() {
    const pageheader = await this.page.getByRole("heading", {
      name: "Let’s get rolling…",
    });
    expect(pageheader).toBeVisible();
  }

  async enterUserName(userName: string) {
    await this.page.locator("#Username").type(userName);
  }

  async enterPassword(password: string) {
    await this.page.getByRole("textbox", { name: "Password" }).type(password);
  }

  async clickLoginBtn() {
    await Promise.all([
      this.page.waitForNavigation({ waitUntil: "networkidle" }),
      this.page.locator("#LoginButton").click(),
    ]);
  }

  async logIntoJournie(userName: string, password: string) {
    await this.enterUserName(userName);
    await this.enterPassword(password);
    await this.clickLoginBtn();
  }
}
