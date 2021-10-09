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
			description:
				"I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.",
			image: "s1.webp"
		},
		{
			title: "Long Distance Moving",
			description:
				"I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.",
			image: "s2.webp"
		},
		{
			title: "Storage Services",
			description:
				"I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.",
			image: "s3.webp"
		},
		{
			title: "Packing & Unpacking",
			description:
				"I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.",
			image: "s4.webp"
		}
	];
}
