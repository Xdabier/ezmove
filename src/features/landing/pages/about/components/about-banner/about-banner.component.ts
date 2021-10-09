import { Component, HostListener } from "@angular/core";
import { BreakpointObserver } from "@angular/cdk/layout";

@Component({
	selector: "app-about-banner",
	templateUrl: "./about-banner.component.html",
	styleUrls: ["./about-banner.component.scss"]
})
export class AboutBannerComponent {
	isDesktop = this.breakPointObserver.isMatched("(min-width: 640px)");
	bgSize = {
		"background-size": this.isDesktop ? "auto 100%" : "cover"
	};

	constructor(private breakPointObserver: BreakpointObserver) {}

	@HostListener("window:scroll")
	onScroll(): void {
		if (this.breakPointObserver.isMatched("(min-width: 640px)")) {
			const scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
			this.bgSize["background-size"] = `auto ${130 + scroll / 100}%`;
		} else if (this.bgSize["background-size"] !== "contained") {
			this.bgSize["background-size"] = "cover";
		}
	}
}
