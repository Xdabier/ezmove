import { Component } from "@angular/core";

@Component({
	selector: "app-tips-tiles",
	templateUrl: "./tips-tiles.component.html",
	styleUrls: ["./tips-tiles.component.scss"]
})
export class TipsTilesComponent {
	tipsTiles = [
		{
			title: "MAKE A LIST",
			tip: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
			bgColor: "bg-black",
			textColor: "text-white"
		},
		{
			title: "SAY GOODBYE TO UNUSED STUFF",
			tip: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
			bgColor: "bg-primary",
			textColor: "text-black"
		},
		{
			title: "GET STURDY, UNIFORM PACKING SUPPLIES",
			tip: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
			bgColor: "bg-primary",
			textColor: "text-black"
		},
		{
			title: "PACK THE BASICS YOURSELF",
			tip: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
			bgColor: "bg-black",
			textColor: "text-white"
		}
	];
}
