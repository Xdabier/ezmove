import { Component, OnInit } from "@angular/core";
import { TitleAndMetaService } from "../../../../core/services/title-and-meta.service";
import { TranslateService } from "@ngx-translate/core";

@Component({
	selector: "app-contact-us",
	templateUrl: "./contact-us.component.html",
	styleUrls: ["./contact-us.component.scss"]
})
export class ContactUsComponent implements OnInit {
	title: string = this.translateService.instant("contact-meta.title") as string;
	description: string = this.translateService.instant("contact-meta.description") as string;

	constructor(private titleAndMetaService: TitleAndMetaService, private translateService: TranslateService) {}

	ngOnInit(): void {
		this.titleAndMetaService.initPageMeta(this.title, this.description);
	}
}
