import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";

export const HTTP_LOADER_FACTORY = (httpClient: HttpClient): TranslateHttpLoader =>
	new TranslateHttpLoader(httpClient, "/assets/json/i18n/", ".json");

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
		FormsModule,
		TranslateModule.forChild({
			loader: {
				provide: TranslateLoader,
				useFactory: HTTP_LOADER_FACTORY,
				deps: [HttpClient]
			}
		})
	],
	exports: [CommonModule, HttpClientModule, FormsModule, TranslateModule]
})
export class SharedModule {}
