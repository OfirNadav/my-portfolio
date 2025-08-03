import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { AboutMeComponent } from "./about-me/about-me.component";
import { LocalizationComponent } from "./localization/localization.component";
import { MainViewComponent } from "./main-view/main-view.component";
import { MyProjectsComponent } from "./my-projects/my-projects.component";
import { SkillsComponent } from "./skills/skills.component";

@Component({
  selector: "onv-homepage",
  templateUrl: "./homepage.component.html",
  encapsulation: ViewEncapsulation.None,
  imports: [
    MainViewComponent,
    MyProjectsComponent,
    SkillsComponent,
    LocalizationComponent,
    AboutMeComponent,
  ],
})
export class HomepageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
