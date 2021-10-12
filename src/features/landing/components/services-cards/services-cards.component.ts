import { Component, Input } from "@angular/core";
import { ServiceCardInterface } from "../service-card/service-card.component";

@Component({
	selector: "app-services-cards",
	templateUrl: "./services-cards.component.html",
	styleUrls: ["./services-cards.component.scss"]
})
export class ServicesCardsComponent {
	@Input() showButtons = true;

	services: ServiceCardInterface[] = [
		{
			title: "Local Moving",
			description: `We have more than 20 trucks of multiple sizes to help you move within the Bay Area.`,
			image: "s1.webp"
		},
		{
			title: "Long Distance Moving",
			description: `Professional movers are ready to help you move your belongings to another state.`,
			image: "s2.webp"
		},
		{
			title: "Storage Services",
			description: `Spacious and secure storage facilities for everything you have to leave behind for a while.`,
			image: "s3.webp"
		},
		{
			title: "Packing & Unpacking",
			description: `professional team to help you pack your stuffs before moving and unpack it aZer the job done `,
			image: "s4.webp"
		}
	];
}
