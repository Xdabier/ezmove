import { Component } from "@angular/core";
import { CompanyInfoInterface, PersonalInfoService } from "../../../../../../core/services/personal-info.service";

@Component({
	selector: "app-address",
	templateUrl: "./address.component.html",
	styleUrls: ["./address.component.scss"]
})
export class AddressComponent {
	info: CompanyInfoInterface = this.personalInfoService.getCompanyInfo();

	constructor(private personalInfoService: PersonalInfoService) {}
}
