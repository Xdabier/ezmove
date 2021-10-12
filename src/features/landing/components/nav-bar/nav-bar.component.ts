import { Component, OnInit } from "@angular/core";
import { PubSubService } from "../../../../core/services/pub-sub.service";
import { PubSubTopicsEnum } from "../../../../core/enums/pub-sub-topics.enum";
import { NavigationEnd, Router } from "@angular/router";

@Component({
	selector: "app-nav-bar",
	templateUrl: "./nav-bar.component.html",
	styleUrls: ["./nav-bar.component.scss"]
})
export class NavBarComponent implements OnInit {
	open = true;
	activeUrl = "/";

	constructor(private pubSubService: PubSubService, private router: Router) {}

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

		this.activeUrl = this.router.url.split("#")[0];

		this.router.events.subscribe((event) => {
			if (event instanceof NavigationEnd) {
				this.activeUrl = event.url.split("#")[0];
			}
		});
	}

	getLinkWithAnchor(): string {
		if (this.activeUrl.length === 1) {
			return `${this.activeUrl.slice(0, -1)}#get-free-quote`;
		}

		if (this.activeUrl[this.activeUrl.length - 1] === "/") {
			return `${this.activeUrl.slice(0, -1)}#get-free-quote`;
		}

		if (this.activeUrl.includes("#")) {
			return this.activeUrl;
		}

		if (this.activeUrl[this.activeUrl.length - 1] !== "/") {
			return `${this.activeUrl}#get-free-quote`;
		}

		return "/#get-free-quote";
	}
}
