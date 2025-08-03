import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { AppService } from "../../app.service";
import { MenuComponent } from "../../menu/menu.component";

@Component({
  selector: "onv-main-view",
  templateUrl: "./main-view.component.html",
  encapsulation: ViewEncapsulation.None,
  imports: [MenuComponent],
})
export class MainViewComponent implements OnInit {
  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.typed();

    this.appService.slippry();

    this.appService.scrollReveal();
  }
}
