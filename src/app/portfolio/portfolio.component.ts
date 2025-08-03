import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { AppService } from "../app.service";
import { MenuComponent } from "../menu/menu.component";

@Component({
  selector: "onv-portfolio",
  templateUrl: "./portfolio.component.html",
  encapsulation: ViewEncapsulation.None,
  imports: [MenuComponent],
})
export class PortfolioComponent implements OnInit {
  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.scrollReveal();
  }
}
