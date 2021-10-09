import { Component } from "@angular/core";

@Component({
	selector: "app-about-tiles",
	templateUrl: "./about-tiles.component.html",
	styleUrls: ["./about-tiles.component.scss"]
})
export class AboutTilesComponent {
	tiles = [
		{
			title: "Planning",
			desc: "STEP 1",
			color: "bg-black",
			textColor: "text-white",
			iconColor: "#ff6538"
		},
		{
			title: "Packing",
			desc: "STEP 2",
			color: "bg-white",
			textColor: "text-black",
			iconColor: "#000"
		},
		{
			title: "Moving",
			desc: "STEP 3",
			color: "bg-whitesmoke",
			textColor: "text-black",
			iconColor: "#000"
		},
		{
			title: "Unpacking",
			desc: "STEP 4",
			color: "bg-primary",
			textColor: "text-black",
			iconColor: "#fff"
		}
	];
}
