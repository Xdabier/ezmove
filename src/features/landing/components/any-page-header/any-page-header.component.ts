import { Component, Input } from "@angular/core";

@Component({
	selector: "app-any-page-header",
	templateUrl: "./any-page-header.component.html",
	styleUrls: ["./any-page-header.component.scss"]
})
export class AnyPageHeaderComponent {
	@Input() title = "";
	@Input() paragraph1 = "";
	@Input() paragraph2 = "";
	@Input() showQuotesButton = false;
}
