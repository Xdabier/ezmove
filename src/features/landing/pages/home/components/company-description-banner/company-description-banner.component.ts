import { Component, HostListener } from "@angular/core";
import { BreakpointObserver } from "@angular/cdk/layout";

@Component({
	selector: "app-company-description-banner",
	templateUrl: "./company-description-banner.component.html",
	styleUrls: ["./company-description-banner.component.scss"]
})
export class CompanyDescriptionBannerComponent {
	bgSize = {
		"background-size": this.breakPointObserver.isMatched("(min-width: 640px)") ? "auto 100%" : "cover"
	};

	constructor(private breakPointObserver: BreakpointObserver) {}

	@HostListener("window:scroll")
	onScroll(): void {
		if (this.breakPointObserver.isMatched("(min-width: 640px)")) {
			const scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
			this.bgSize["background-size"] = `auto ${110 + scroll / 70}%`;
		} else if (this.bgSize["background-size"] !== "contained") {
			this.bgSize["background-size"] = "cover";
		}
	}
}
