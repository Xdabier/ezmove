import { Component, HostListener } from "@angular/core";
import { BreakpointObserver } from "@angular/cdk/layout";

@Component({
	selector: "app-promo-banner",
	templateUrl: "./promo-banner.component.html",
	styleUrls: ["./promo-banner.component.scss"]
})
export class PromoBannerComponent {
	isDesktop = this.breakPointObserver.isMatched("(min-width: 640px)");
	bgSize = {
		"background-size": this.isDesktop ? "auto 100%" : "cover"
	};

	qualities = [
		{
			title: "Bay Area moving",
			color: "bg-black",
			iconColor: "#fff"
		},
		{
			title: "Full Value Insurance",
			color: "bg-primary",
			iconColor: "#fff"
		},
		{
			title: "95% Referral Rate",
			color: "bg-white",
			iconColor: "#000"
		}
	];

	constructor(private breakPointObserver: BreakpointObserver) {}

	@HostListener("window:scroll")
	onScroll(): void {
		if (this.breakPointObserver.isMatched("(min-width: 640px)")) {
			const scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
			this.bgSize["background-size"] = `auto ${90 + scroll / 100}%`;
		} else if (this.bgSize["background-size"] !== "contained") {
			this.bgSize["background-size"] = "cover";
		}
	}
}
