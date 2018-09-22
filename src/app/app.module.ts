import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutMeComponent } from './homepage/about-me/about-me.component';
import { MyProjectsComponent } from './homepage/my-projects/my-projects.component';
import { SkillsComponent } from './homepage/skills/skills.component';
import { LocalizationComponent } from './homepage/localization/localization.component';
import { MainViewComponent } from './homepage/main-view/main-view.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { RoutingModule } from './routing/routing.module';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutMeComponent,
    MyProjectsComponent,
    SkillsComponent,
    LocalizationComponent,
    MainViewComponent,
    FooterComponent,
    PortfolioComponent,
    AboutComponent,
    MenuComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
