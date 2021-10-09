import { Component } from "@angular/core";

@Component({
	selector: "app-social-proof-logos",
	templateUrl: "./social-proof-logos.component.html",
	styleUrls: ["./social-proof-logos.component.scss"]
})
export class SocialProofLogosComponent {
	companies = [
		"https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png",
		"https://www.tailorbrands.com/wp-content/uploads/2020/06/mcdonalds-logo-a-1.png",
		"http://cdn.cnn.com/cnnnext/dam/assets/180301124611-fedex-logo.png",
		"https://static.highsnobiety.com/thumbor/Dlh0IXpfsroEYkPeg4h9FT0Sjyc=/1600x1067/static.highsnobiety.com/wp-content/uploads/2012/08/06171644/replacement-logos-01.jpg",
		"https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Logo%21_Logo.svg/1200px-Logo%21_Logo.svg.png"
	];
}
