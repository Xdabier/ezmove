import { Component, OnInit } from "@angular/core";
import { FormControl, Validators, FormBuilder, FormGroup } from "@angular/forms";

@Component({
	selector: "app-contact-form",
	templateUrl: "./contact-form.component.html",
	styleUrls: ["./contact-form.component.scss"]
})
export class ContactFormComponent implements OnInit {
	contactUsForm!: FormGroup;
	roomsOptions = ["Studio", "1 Bedroom", "2 Bedroom", "3 Bedroom", "4 Bedroom", "5+ Bedroom"];

	constructor(private formBuilder: FormBuilder) {}

	ngOnInit(): void {
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
		console.log(this.contactUsForm.getRawValue());
	}
}
