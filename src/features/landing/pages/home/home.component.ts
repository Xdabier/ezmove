import { AfterViewInit, Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements AfterViewInit {
	constructor(private router: Router) {}

	ngAfterViewInit(): void {
		if (this.router.url.includes("get-free-quote")) {
			const fragment = document.getElementById("get-free-quote");
			if (fragment) {
				fragment.scrollIntoView();
			}
		}
	}
}
