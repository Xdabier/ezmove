import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { HomeComponent } from "./pages/home/home.component";
import { LandingRouting } from "./landing.routing";
import { LandingComponent } from "./components/landing/landing.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ContactFormComponent } from "./components/contact-form/contact-form.component";
import { LogoComponent } from "./components/logo/logo.component";
import { SideNavComponent } from "./components/side-nav/side-nav.component";
import { HomeHeroComponent } from "./pages/home/components/home-hero/home-hero.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CompanyDescriptionBannerComponent } from "./pages/home/components/company-description-banner/company-description-banner.component";
import { ServiceCardComponent } from "./components/service-card/service-card.component";
import { ServicesCardsComponent } from "./components/services-cards/services-cards.component";
import { PromoBannerComponent } from "./pages/home/components/promo-banner/promo-banner.component";
import { HomeCarouselComponent } from "./pages/home/components/home-carousel/home-carousel.component";
import { IvyCarouselModule } from "angular-responsive-carousel";
import { SocialProofLogosComponent } from "./pages/home/components/social-proof-logos/social-proof-logos.component";
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { TipsComponent } from './pages/tips/tips.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AnyPageHeaderComponent } from './components/any-page-header/any-page-header.component';
import { AboutTilesComponent } from './pages/about/components/about-tiles/about-tiles.component';
import { AboutBannerComponent } from './pages/about/components/about-banner/about-banner.component';
import { TipsTilesComponent } from './pages/tips/components/tips-tiles/tips-tiles.component';

@NgModule({
	imports: [CommonModule, SharedModule, LandingRouting, ReactiveFormsModule, IvyCarouselModule],
	declarations: [
		HomeComponent,
		LandingComponent,
		NavBarComponent,
		FooterComponent,
		ContactFormComponent,
		LogoComponent,
		SideNavComponent,
		HomeHeroComponent,
		CompanyDescriptionBannerComponent,
		ServiceCardComponent,
		ServicesCardsComponent,
		PromoBannerComponent,
		HomeCarouselComponent,
		SocialProofLogosComponent,
  AboutComponent,
  ServicesComponent,
  TipsComponent,
  ContactUsComponent,
  AnyPageHeaderComponent,
  AboutTilesComponent,
  AboutBannerComponent,
  TipsTilesComponent
	]
})
export class LandingModule {}
