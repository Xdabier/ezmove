import { Injectable } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";

@Injectable({
	providedIn: "root"
})
export class AnchorScrollingService {
	constructor(private router: Router) {}

	navToFragment(url: string): void {
		const fragmentIdx = url.lastIndexOf("#");
		if (fragmentIdx >= 0 && fragmentIdx < url.length - 1) {
			const fragment = url.substring(fragmentIdx + 1);
			// console.log('fragment: ' + fragment);
			const fragmentElement = document.getElementById(fragment);
			if (fragmentElement) {
				window.scrollTo({
					top: fragmentElement.offsetTop - 70,
					behavior: "smooth"
				});
			}
		}
	}

	listen(): void {
		this.navToFragment(this.router.url);

		this.router.events.subscribe((val) => {
			// console.log(val);
			if (val instanceof NavigationEnd) {
				this.navToFragment(val.urlAfterRedirects);
			}
		});
	}
}
