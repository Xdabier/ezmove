import { Component, OnInit } from "@angular/core";
import { PubSubService } from "../../../../core/services/pub-sub.service";
import { PubSubTopicsEnum } from "../../../../core/enums/pub-sub-topics.enum";

@Component({
	selector: "app-nav-bar",
	templateUrl: "./nav-bar.component.html",
	styleUrls: ["./nav-bar.component.scss"]
})
export class NavBarComponent implements OnInit {
	open = true;

	constructor(private pubSubService: PubSubService) {}

	toggleMenu(): void {
		this.open = !this.open;
		this.pubSubService.pub({
			topic: PubSubTopicsEnum.toggleMenu,
			data: this.open
		});
	}

	ngOnInit(): void {
		this.pubSubService.sub().subscribe((value) => {
			if (value.topic === PubSubTopicsEnum.toggleMenu) {
				this.open = value.data as boolean;
			}
		});
	}
}
