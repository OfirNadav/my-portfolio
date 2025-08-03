import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { AppService } from "../app.service";
import { MenuComponent } from "../menu/menu.component";

@Component({
  selector: "onv-about",
  templateUrl: "./about.component.html",
  encapsulation: ViewEncapsulation.None,
  imports: [MenuComponent],
})
export class AboutComponent implements OnInit {
  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.scrollReveal();
  }
}
