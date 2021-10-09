import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import * as Aos from "aos";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
	constructor(private translationService: TranslateService) {
		translationService.setDefaultLang("en");
	}

	ngOnInit(): void {
		Aos.init();
	}
}
