import { Component, OnInit } from "@angular/core";
import { TitleAndMetaService } from "../../../../core/services/title-and-meta.service";
import { TranslateService } from "@ngx-translate/core";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
	title: string = this.translateService.instant("home-meta.title") as string;
	description: string = this.translateService.instant("home-meta.description") as string;

	constructor(private titleAndMetaService: TitleAndMetaService, private translateService: TranslateService) {}

	ngOnInit(): void {
		this.titleAndMetaService.initPageMeta(this.title, this.description);
	}
}
