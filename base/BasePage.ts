import {test as basetest} from "@playwright/test";
import HomePage from "../pages/HomePage";
import landingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";

type Pages = {
    homePage : HomePage;
    landingPage : landingPage;
    loginPage : LoginPage;
}

const testPages = basetest.extend<Pages>({
    homePage : async ({page}, use) => {
        await use(new HomePage(page))
    },

    loginPage : async ({page},use) => {
        await use(new LoginPage(page))
    },

    landingPage : async ({page}, use) => {
        await use(new landingPage(page))
    }
})

export const test = testPages;
export const expect = testPages.expect;