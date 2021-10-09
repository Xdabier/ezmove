import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
	selector: "[appAosFadeUp]"
})
export class AosFadeUpDirective implements OnInit {
	@Input() activateDesktopOnly = false;
	@Input() activateMobileOnly = false;
	@Input() aosDelay = 0;
	isShowing = false;

	constructor(private renderer: Renderer2, private hostElement: ElementRef<HTMLElement>) {}

	isShown(): boolean {
		const rect = this.hostElement.nativeElement.getBoundingClientRect();
		const topShown = rect.top >= 0;
		const bottomShown = rect.bottom <= window.innerHeight;
		return topShown && bottomShown;
	}

	ngOnInit(): void {
		if (this.activateMobileOnly && this.isMobile()) {
			this.initAnimation();
			this.isShowing = true;
		}

		if (this.activateDesktopOnly && !this.isMobile()) {
			this.initAnimation();
			this.isShowing = true;
		}

		if (!this.activateDesktopOnly && !this.activateMobileOnly) {
			this.initAnimation();
			this.isShowing = true;
		}
	}

	@HostListener("window:scroll", ["$event"])
	fadeInElement(): void {
		if (this.isShown() && this.isShowing) {
			this.addFadeUpClass(this.aosDelay);
		}
	}

	addFadeUpClass(delay = 0): void {
		setTimeout(() => this.renderer.addClass(this.hostElement.nativeElement, "fade-in-up"), delay);
	}

	isMobile(): boolean {
		return window.innerWidth <= 640;
	}

	initAnimation(): void {
		this.renderer.addClass(this.hostElement.nativeElement, "animated");
		this.renderer.addClass(this.hostElement.nativeElement, "animated-fade-in-up");

		setTimeout(() => {
			if (this.isShown()) {
				this.addFadeUpClass(this.aosDelay);
			}
		});
	}
}
