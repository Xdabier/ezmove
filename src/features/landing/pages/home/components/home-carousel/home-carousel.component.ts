import { Component, ViewChild } from "@angular/core";
import { BreakpointObserver } from "@angular/cdk/layout";
import { CarouselComponent, OwlOptions } from "ngx-owl-carousel-o";

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
	@ViewChild("theCarousel", { static: false }) theCarousel!: CarouselComponent;

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

	carouselOptions: OwlOptions = {
		loop: true,
		autoplay: true,
		mouseDrag: true,
		touchDrag: false,
		pullDrag: false,
		dots: false,
		autoplaySpeed: 700,
		navSpeed: 700,
		responsive: {
			0: {
				items: 1
			},
			400: {
				items: 1
			},
			740: {
				items: 1
			},
			940: {
				items: 1
			}
		},
		nav: false
	};

	constructor(private breakpointObserver: BreakpointObserver) {}

	nextSlide(): void {
		this.theCarousel.next();
	}

	prevSlide(): void {
		this.theCarousel.prev();
	}
}
