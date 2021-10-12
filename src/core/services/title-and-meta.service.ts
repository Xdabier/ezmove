import { Inject, Injectable } from "@angular/core";
import { Meta, MetaDefinition, Title } from "@angular/platform-browser";
import { DOCUMENT, Location } from "@angular/common";

@Injectable({
	providedIn: "root"
})
export class TitleAndMetaService {
	private appName = "EzMove";
	private mainUrl = `${window.location.protocol}//${window.location.host}`;

	constructor(
		private metaService: Meta,
		private titleService: Title,
		private loc: Location,
		@Inject(DOCUMENT) private doc: Document
	) {}

	upsertMetaTag(tag: MetaDefinition): void {
		const selector = tag.name ? "name" : "property";
		const exists = this.metaService.getTag(`${selector}="${tag[selector as keyof MetaDefinition]}"`);

		if (exists) {
			this.metaService.updateTag(tag);
			return;
		}

		this.metaService.addTag(tag);
		return;
	}

	createLinkForCanonicalURL(): void {
		const url = `${this.mainUrl}${this.loc.path()}`;

		const existingLink = this.doc.querySelector('link[rel="canonical"]');

		if (existingLink) {
			existingLink.setAttribute("href", url);
		} else {
			const link: HTMLLinkElement = this.doc.createElement("link");
			link.setAttribute("rel", "canonical");
			this.doc.head.appendChild(link);
			link.setAttribute("href", url);
		}

		this.upsertMetaTag({
			property: "og:url",
			content: url
		});
	}

	setTitle(title: string, addWebsiteName = true, separator = "|"): void {
		const titleText = addWebsiteName ? `${this.appName} ${separator} ${title}` : title;

		this.titleService.setTitle(titleText);
		this.upsertMetaTag({
			name: "title",
			content: titleText
		});
		this.upsertMetaTag({
			name: "og:title",
			content: titleText
		});
	}

	initPageMeta(
		title: string,
		description: string,
		imagePath?: string,
		addWebsiteName = true,
		titleSeparator = "|"
	): void {
		this.upsertMetaTag({
			property: "og:image",
			content: imagePath ? imagePath : `${this.mainUrl}/assets/banner/2.webp`
		});

		this.upsertMetaTag({
			name: "description",
			content: description
		});

		this.upsertMetaTag({
			name: "og:description",
			content: description
		});

		this.setTitle(title, addWebsiteName, titleSeparator);
		this.createLinkForCanonicalURL();
	}
}
