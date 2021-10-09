import { Component, ViewChild } from "@angular/core";
import { Carousel } from "angular-responsive-carousel/lib/carousel";
import { BreakpointObserver } from "@angular/cdk/layout";

interface TestimonialsInterface {
	content: string;
	title: string;
}

@Component({
	selector: "app-home-carousel",
	templateUrl: "./home-carousel.component.html",
	styleUrls: ["./home-carousel.component.scss"]
})
export class HomeCarouselComponent {
	@ViewChild("theCarousel", { static: false }) theCarousel!: Carousel;

	carouselWidth = this.breakpointObserver.isMatched("(min-width: 640px)")
		? window.innerWidth / 2
		: window.innerWidth * 0.6;
	testimonials: TestimonialsInterface[] = [
		{
			content:
				"I'm a testimonial. Click to edit me and add text that says something nice about you and your services.",
			title: "Christina Watts"
		},
		{
			content:
				"I'm a testimonial. Click to edit me and add text that says something nice about you and your services.",
			title: "Dara and James Levine"
		},
		{
			content:
				"I'm a testimonial. Click to edit me and add text that says something nice about you and your services.",
			title: "The Webers"
		}
	];

	constructor(private breakpointObserver: BreakpointObserver) {}

	nextSlide(): void {
		this.theCarousel.next();
	}

	prevSlide(): void {
		this.theCarousel.prev();
	}
}
