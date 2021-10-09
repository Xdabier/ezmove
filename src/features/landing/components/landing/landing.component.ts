import { Component, HostListener, OnInit } from "@angular/core";
import { PubSubService } from "../../../../core/services/pub-sub.service";
import { PubSubTopicsEnum } from "../../../../core/enums/pub-sub-topics.enum";

@Component({
	selector: "app-landing",
	templateUrl: "./landing.component.html",
	styleUrls: ["./landing.component.scss"]
})
export class LandingComponent implements OnInit {
	menuState = true;
	isButtonShowing = false;

	constructor(private pubSubService: PubSubService) {}

	ngOnInit(): void {
		this.pubSubService.sub().subscribe((value) => {
			if (value.topic === PubSubTopicsEnum.toggleMenu) {
				this.menuState = value.data as boolean;
			}
		});
		this.showScrollButton();
	}

	@HostListener("window:scroll")
	showScrollButton(): void {
		const scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
		this.isButtonShowing = scroll >= 400;
	}

	scrollToTop(): void {
		window.scrollTo({
			top: 0
		});
	}
}
