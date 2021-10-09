import { Component, Input } from "@angular/core";

export interface ServiceCardInterface {
	title: string;
	description: string;
	image: string;
}

@Component({
	selector: "app-service-card",
	templateUrl: "./service-card.component.html",
	styleUrls: ["./service-card.component.scss"]
})
export class ServiceCardComponent {
	@Input() service!: ServiceCardInterface;
	@Input() index = 0;
	@Input() showButton = true;
}
