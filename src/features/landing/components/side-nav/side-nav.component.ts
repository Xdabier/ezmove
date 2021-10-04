import { Component, Input } from "@angular/core";
import { PubSubService } from "../../../../core/services/pub-sub.service";
import { PubSubTopicsEnum } from "../../../../core/enums/pub-sub-topics.enum";

@Component({
	selector: "app-side-nav",
	templateUrl: "./side-nav.component.html",
	styleUrls: ["./side-nav.component.scss"]
})
export class SideNavComponent {
	@Input() hideMenu = true;

	constructor(private puSubService: PubSubService) {}
	toggleMenu(): void {
		this.puSubService.pub({
			topic: PubSubTopicsEnum.toggleMenu,
			data: !this.hideMenu
		});
	}
}
