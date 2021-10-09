import { Injectable } from "@angular/core";

export interface CompanyInfoInterface {
	licenseNumber: string;
	year: number;
	phoneNumber: string;
	email: string;
	addressLine1: string;
	addressLine2: string;
	hoursWeek: string;
	hoursSat: string;
	hoursSun: string;
}

@Injectable({
	providedIn: "root"
})
export class PersonalInfoService {
	getCompanyInfo(): CompanyInfoInterface {
		return {
			licenseNumber: "123-456-7890",
			year: new Date().getFullYear(),
			phoneNumber: "123-456-7890",
			email: "contact@ez-move.net",
			addressLine1: "900 143rd ave",
			addressLine2: "San leandro 94578",
			hoursWeek: "8am - 8pm",
			hoursSat: "9am - 7pm",
			hoursSun: "9am - 8pm"
		};
	}
}
