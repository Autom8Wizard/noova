import { expect } from "@playwright/test";
import { AppPage } from "../abstractClasses";
import { step } from "../../misc/reporters/step";

export class Home extends AppPage {
    public pagePath = '/';
    
    private homePageId = this.page.locator('//body[contains(@class, "home page")]//a[@rel = "home"]')

    @step()
    async expectLoaded(message = 'Expected Home page to be opened') {
        await expect(this.homePageId, message).toBeVisible();
    }
}