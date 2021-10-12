import { Component, OnInit } from "@angular/core";
import { TitleAndMetaService } from "../../../../core/services/title-and-meta.service";
import { TranslateService } from "@ngx-translate/core";

@Component({
	selector: "app-services",
	templateUrl: "./services.component.html",
	styleUrls: ["./services.component.scss"]
})
export class ServicesComponent implements OnInit {
	title: string = this.translateService.instant("services-meta.title") as string;
	description: string = this.translateService.instant("services-meta.description") as string;

	constructor(private titleAndMetaService: TitleAndMetaService, private translateService: TranslateService) {}

	ngOnInit(): void {
		this.titleAndMetaService.initPageMeta(this.title, this.description);
	}
}
