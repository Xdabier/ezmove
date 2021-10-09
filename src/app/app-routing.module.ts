import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
	{
		path: "",
		loadChildren: () => import("../features/landing/landing.module").then((value) => value.LandingModule)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })],
	exports: [RouterModule]
})
export class AppRoutingModule {}
