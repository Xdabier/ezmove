import { Component, OnInit } from "@angular/core";
import { PubSubService } from "../../../../core/services/pub-sub.service";
import { PubSubTopicsEnum } from "../../../../core/enums/pub-sub-topics.enum";

@Component({
	selector: "app-landing",
	templateUrl: "./landing.component.html",
	styleUrls: ["./landing.component.scss"]
})
export class LandingComponent implements OnInit {
	menuState = true;

	constructor(private pubSubService: PubSubService) {}

	ngOnInit(): void {
		this.pubSubService.sub().subscribe((value) => {
			if (value.topic === PubSubTopicsEnum.toggleMenu) {
				this.menuState = value.data as boolean;
			}
		});
	}
}
