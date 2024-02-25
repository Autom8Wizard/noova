import { PageHolder } from "./abstractClasses";
import { ContactUs } from "./page/contactus.page";
import { Home } from "./page/home.page";

export class Application extends PageHolder {
    public home = new Home(this.page);
    public contactus = new ContactUs(this.page);
}