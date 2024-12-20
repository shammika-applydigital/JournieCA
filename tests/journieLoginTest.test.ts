import {test, expect} from "../base/BasePage";
import * as data from "../test-data/journiuserdata.json"

test.describe("Journie Login test suite", () =>{


test("Login test", async ({page, loginPage, landingPage, homePage, baseURL}) => {

    await page.goto(`${baseURL}`);
    await landingPage.clickLogin();
    await loginPage.verifyLoginPageHeading();
    await loginPage.logIntoJournie(data.email, data.password);
    await homePage.closePopup();
    await homePage.verifyHomePage();
    await homePage.clickProfileIcon();
    await homePage.verifyUserLogedIn(data.username);
    await homePage.clickLogOut();
})

})
