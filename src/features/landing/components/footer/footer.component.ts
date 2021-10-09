import { Component } from "@angular/core";
import { CompanyInfoInterface, PersonalInfoService } from "../../../../core/services/personal-info.service";

@Component({
	selector: "app-footer",
	templateUrl: "./footer.component.html",
	styleUrls: ["./footer.component.scss"]
})
export class FooterComponent {
	info: CompanyInfoInterface = this.personalInfoService.getCompanyInfo();

	constructor(private personalInfoService: PersonalInfoService) {}
}
