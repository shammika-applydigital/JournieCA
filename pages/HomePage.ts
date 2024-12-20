import { expect, Page } from "@playwright/test";

export default class HomePage {
  constructor(public page: Page) {}

  async verifyHomePage() {
    const homePageheading = await this.page.getByText("IT’S REWARD TIME!");
    await homePageheading.waitFor({state:"visible", timeout:3000});
    await expect(homePageheading).toBeVisible(); 
}


  async clickProfileIcon() {
    await this.page.click("(//img[@alt='Profile image'])[2]");
  }

  async verifyUserLogedIn(userName: string) {
    const profileName = this.page.locator("(//span[@class='user-wrapper']//label)[2]");
    await profileName.waitFor({ state: "visible", timeout: 3000 });
    await expect(profileName).toContainText(userName);
  }
  

  async closePopup() {
    try {
        const popupCloseButton = this.page.locator("(//a[@data-dismiss='modal']//span)[2]");
        await popupCloseButton.waitFor({ state: "visible", timeout: 3000 });
        await popupCloseButton.click();
    } catch (error) {
        console.log("Popup not found or already closed.");
    }
}

  async clickLogOut() {
        await this.page.locator("(//a[contains(@class,'sign-out-link btn')])[2]").click()
  }
}
