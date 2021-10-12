import { Component, OnInit } from "@angular/core";
import { FormControl, Validators, FormBuilder, FormGroup } from "@angular/forms";
import { AnchorScrollingService } from "../../../../core/services/anchor-scrolling.service";
import { GoogleSheetConnectService } from "../../../../core/services/google-sheet-connect.service";
import { TranslateService } from "@ngx-translate/core";

export interface ContactFormInterface {
	zipFrom: string;
	zipTo: string;
	date?: string;
	rooms: "Studio" | "1 Bedroom" | "2 Bedroom" | "3 Bedroom" | "4 Bedroom" | "5+ Bedroom";
	firstName: string;
	lastName: string;
	phone: string;
}

type CSSStylesType = Partial<CSSStyleDeclaration>;

@Component({
	selector: "app-contact-form",
	templateUrl: "./contact-form.component.html",
	styleUrls: ["./contact-form.component.scss"]
})
export class ContactFormComponent implements OnInit {
	contactUsForm!: FormGroup;
	roomsOptions = ["Studio", "1 Bedroom", "2 Bedroom", "3 Bedroom", "4 Bedroom", "5+ Bedroom"];
	successMsg = this.translateService.instant("form-sent.success") as string;
	errorMsg = this.translateService.instant("form-sent.error") as string;

	constructor(
		private formBuilder: FormBuilder,
		private anchorScrollingService: AnchorScrollingService,
		private googleSheetService: GoogleSheetConnectService,
		private translateService: TranslateService
	) {}

	ngOnInit(): void {
		this.anchorScrollingService.listen();

		this.contactUsForm = this.formBuilder.group({
			zipFrom: new FormControl(null, [Validators.required]),
			zipTo: new FormControl(null, [Validators.required]),
			date: new FormControl(null),
			rooms: new FormControl(null, [Validators.required]),
			firstName: new FormControl(null, [Validators.required]),
			lastName: new FormControl(null, [Validators.required]),
			phone: new FormControl(null, [Validators.required])
		});
	}

	onSubmit(): void {
		const contactForm: ContactFormInterface = this.contactUsForm.getRawValue() as ContactFormInterface;
		if (!contactForm.date) {
			delete contactForm.date;
		}
		this.loadingStatus();

		this.googleSheetService.submitContactForm(contactForm).subscribe((res) => {
			this.loadingStatus(false);

			if (res.result === "success") {
				this.showToast(this.successMsg, 3500, { fontSize: "18px" });
				this.contactUsForm.reset();
			}

			if (res.result === "error") {
				this.showToast(this.errorMsg, 3500, { fontSize: "18px" });
			}
		});
	}

	showToast(text: string, timeout: number, options: CSSStylesType): void {
		timeout = timeout || 3000;
		const opts: CSSStyleDeclaration = options as CSSStyleDeclaration;
		const toast = document.createElement("DIV");
		toast.classList.add("toast-it");
		const content = document.createTextNode(text);
		toast.appendChild(content);
		toast.style.animationDuration = `${timeout / 1000}s`;

		for (const prop in opts) {
			toast.style[prop] = opts[prop];
		}

		document.body.appendChild(toast);
		setTimeout(function () {
			document.body.removeChild(toast);
		}, timeout);
	}

	loadingStatus(show = true): void {
		if (show) {
			const loader = document.createElement("DIV");
			loader.setAttribute("id", "loader");
			document.body.appendChild(loader);
		}

		if (!show) {
			const loader = document.getElementById("loader");
			if (loader) {
				document.body.removeChild(loader);
			}
		}
	}
}
