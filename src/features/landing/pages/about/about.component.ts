import { Component, OnInit } from "@angular/core";
import { TitleAndMetaService } from "../../../../core/services/title-and-meta.service";
import { TranslateService } from "@ngx-translate/core";

@Component({
	selector: "app-about",
	templateUrl: "./about.component.html",
	styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
	title: string = this.translateService.instant("about-meta.title") as string;
	description: string = this.translateService.instant("about-meta.description") as string;

	constructor(private titleAndMetaService: TitleAndMetaService, private translateService: TranslateService) {}

	ngOnInit(): void {
		this.titleAndMetaService.initPageMeta(this.title, this.description);
	}
}
