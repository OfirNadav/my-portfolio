import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "onv-my-projects",
  templateUrl: "./my-projects.component.html",
  encapsulation: ViewEncapsulation.None,
  imports: [RouterModule],
})
export class MyProjectsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
