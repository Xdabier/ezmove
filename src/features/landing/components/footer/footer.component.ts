import { Component } from "@angular/core";

@Component({
	selector: "app-footer",
	templateUrl: "./footer.component.html",
	styleUrls: ["./footer.component.scss"]
})
export class FooterComponent {
	licenseNumber = "123-456-7890";
	year = new Date().getFullYear();
	phoneNumber = "123-456-7890";
	email = "contact@ez-move.net";
	addressLine1 = "900 143rd ave";
	addressLine2 = "San leandro 94578";
	hoursWeek = "8am - 8pm";
	hoursSat = "9am - 7pm";
	hoursSun = "9am - 8pm";
}
