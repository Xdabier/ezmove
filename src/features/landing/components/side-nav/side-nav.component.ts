import { Component, Input, OnInit } from "@angular/core";
import { PubSubService } from "../../../../core/services/pub-sub.service";
import { PubSubTopicsEnum } from "../../../../core/enums/pub-sub-topics.enum";
import { NavigationEnd, NavigationStart, Router } from "@angular/router";

@Component({
	selector: "app-side-nav",
	templateUrl: "./side-nav.component.html",
	styleUrls: ["./side-nav.component.scss"]
})
export class SideNavComponent implements OnInit {
	@Input() hideMenu = true;
	activeUrl = "/";

	constructor(private puSubService: PubSubService, private router: Router) {}
	toggleMenu(): void {
		this.puSubService.pub({
			topic: PubSubTopicsEnum.toggleMenu,
			data: !this.hideMenu
		});
	}

	ngOnInit(): void {
		this.activeUrl = this.router.url.split("#")[0];

		this.router.events.subscribe((event) => {
			if (event instanceof NavigationStart && !this.hideMenu) {
				this.toggleMenu();
			}

			if (event instanceof NavigationEnd) {
				this.activeUrl = event.url.split("#")[0];
			}
		});
	}
}
