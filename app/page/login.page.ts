import { expect, test } from "@playwright/test";
import { AppPage } from "../abstractClasses";
import { step } from "../../misc/reporters/step";


export class Login extends AppPage {
    public pagePath = ''

    private accountNameInput = this.page.locator('//input[@name = "login"]');
    private agentNameInput = this.page.locator('//input[@name = "agentName"]');
    private passwordInput = this.page.locator('//input[@name = "password"]');
    private loginButton = this.page.locator('//button[@type = "submit" and text() = "Login"]');
    private warningMessage = this.page.locator('//div[contains(@class, "SnackbarContainer")]//div[@id="notistack-snackbar"]//div[@data-test-id = "notification-message" and text() = "Something went wrong, check the entered data"]')


    @step()
    async expectLoaded() {
        await expect(this.accountNameInput).toBeVisible();
        await expect(this.agentNameInput).toBeVisible();
        await expect(this.passwordInput).toBeVisible();
        await expect(this.loginButton).toBeVisible();
    }


    @step()
    async submitLoggin(options: { accountName: string, agentName: string, password: string }) {
        await this.expectLoaded();
        await this.accountNameInput.fill(options.accountName);
        await this.agentNameInput.fill(options.agentName);
        await this.passwordInput.fill(options.password);
        await this.loginButton.click();
    }


    @step()
    async expectWarningMessage() {
        await expect(this.warningMessage).toBeVisible()
}
}