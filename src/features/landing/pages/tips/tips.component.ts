import { Component, OnInit } from "@angular/core";
import { TitleAndMetaService } from "../../../../core/services/title-and-meta.service";
import { TranslateService } from "@ngx-translate/core";

@Component({
	selector: "app-tips",
	templateUrl: "./tips.component.html",
	styleUrls: ["./tips.component.scss"]
})
export class TipsComponent implements OnInit {
	title: string = this.translateService.instant("tips-meta.title") as string;
	description: string = this.translateService.instant("tips-meta.description") as string;

	constructor(private titleAndMetaService: TitleAndMetaService, private translateService: TranslateService) {}

	ngOnInit(): void {
		this.titleAndMetaService.initPageMeta(this.title, this.description);
	}
}
