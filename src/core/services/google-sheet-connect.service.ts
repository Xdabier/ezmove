import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ContactFormInterface } from "../../features/landing/components/contact-form/contact-form.component";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

export interface GoogleSheetRespInterface {
	result: "error" | "success";
	error: any;
	e: any;
}

@Injectable({
	providedIn: "root"
})
export class GoogleSheetConnectService {
	constructor(private httpClient: HttpClient) {}

	genFormData(obj: { [index: string]: any }): FormData {
		const FORM = new FormData();
		const KEYS = Object.keys(obj);

		for (const KEY of KEYS) {
			FORM.set(KEY, obj[KEY]);
		}

		return FORM;
	}

	submitContactForm(body: ContactFormInterface): Observable<GoogleSheetRespInterface> {
		return this.httpClient.post<GoogleSheetRespInterface>(environment.sheetUrl, this.genFormData(body));
	}
}
