import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { HomeComponent } from "./pages/home/home.component";
import { LandingRouting } from "./landing.routing";
import { LandingComponent } from './components/landing/landing.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { LogoComponent } from './components/logo/logo.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';

@NgModule({
	imports: [CommonModule, SharedModule, LandingRouting],
	declarations: [HomeComponent, LandingComponent, NavBarComponent, FooterComponent, ContactFormComponent, LogoComponent, SideNavComponent]
})
export class LandingModule {}
