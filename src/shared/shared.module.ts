import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { LayoutModule } from "@angular/cdk/layout";
import { AosFadeUpDirective } from "./directives/aos-fade-up.directive";

export const HTTP_LOADER_FACTORY = (httpClient: HttpClient): TranslateHttpLoader =>
	new TranslateHttpLoader(httpClient, "/assets/json/i18n/", ".json");

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
		FormsModule,
		LayoutModule,
		TranslateModule.forChild({
			loader: {
				provide: TranslateLoader,
				useFactory: HTTP_LOADER_FACTORY,
				deps: [HttpClient]
			}
		})
	],
	exports: [AosFadeUpDirective, CommonModule, HttpClientModule, FormsModule, TranslateModule, LayoutModule],
	declarations: [AosFadeUpDirective]
})
export class SharedModule {}
