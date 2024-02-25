import { expect, test } from "@playwright/test";
import { AppPage } from "../abstractClasses";
import { step } from "../../misc/reporters/step";

export class ContactUs extends AppPage {
    public pagePath = '/contact'

    private firstNameInput = this.page.locator('//input[@name = "firstname"]');
    private lastNameInput = this.page.locator('//input[@name = "lastname"]');
    private emailInput = this.page.locator('//fieldset[contains(@class, "form")]//label[@placeholder = "Enter your Email"]/following-sibling::div//input[@name = "email"]');
    private phoneNumberInput = this.page.locator('//input[@name = "phone"]');
    private hotelNameInput = this.page.locator('//input[@name = "0-2/name"]');
    private messageInput = this.page.locator('//textarea[@name = "message"]');
    private submitButton = this.page.locator('//div[contains(@class, "recaptcha")]/following-sibling::div[contains(@class,"hs-submit")]//input[@value = "Submit"]');
    private successfullSubmissionLabel = this.page.locator('//div[contains(@id, "hbspt-form")]/div[text() = "Thanks for submitting the form."]');


    @step()
    async expectLoaded() {
        await expect(this.firstNameInput).toBeVisible();
        await expect(this.lastNameInput).toBeVisible();
        await expect(this.emailInput).toBeVisible();
        await expect(this.phoneNumberInput).toBeVisible();
        await expect(this.hotelNameInput).toBeVisible();
        await expect(this.messageInput).toBeVisible();
        await expect(this.submitButton).toBeVisible();
    }


    @step()
    async submitContactUsForm(options: { firstName: string, lastName: string, email: string, phoneNumber: string, hotelName: string, message: string }) {
        await this.expectLoaded();
        await this.firstNameInput.fill(options.firstName);
        await this.lastNameInput.fill(options.lastName);
        await this.emailInput.fill(options.email);
        await this.phoneNumberInput.fill(options.phoneNumber);
        await this.hotelNameInput.fill(options.hotelName);
        await this.messageInput.fill(options.message);
        await this.submitButton.click();
    }


    @step()
    async expectContactUsFormSubmitted() {
        await expect(this.successfullSubmissionLabel).toBeVisible();
    }
}