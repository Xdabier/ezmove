import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { LandingComponent } from "./components/landing/landing.component";
import { ServicesComponent } from "./pages/services/services.component";
import { TipsComponent } from "./pages/tips/tips.component";
import { ContactUsComponent } from "./pages/contact-us/contact-us.component";
import { AboutComponent } from "./pages/about/about.component";

const routes: Routes = [
	{
		path: "",
		component: LandingComponent,
		children: [
			{
				path: "",
				component: HomeComponent
			},
			{
				path: "about",
				component: AboutComponent
			},
			{
				path: "services",
				component: ServicesComponent
			},
			{
				path: "tips",
				component: TipsComponent
			},
			{
				path: "contact-us",
				component: ContactUsComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class LandingRouting {}
