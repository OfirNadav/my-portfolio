import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CommonModule } from "@angular/common";

declare const $: any;

@Component({
  selector: "onv-menu",
  templateUrl: "./menu.component.html",
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule],
})
export class MenuComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {}

  toggleNavigation(e?) {
    let isLateralNavAnimating = false;

    // stop if nav animation is running
    if (!isLateralNavAnimating) {
      if ($(".cd-nav-trigger").parents(".csstransitions").length > 0) {
        isLateralNavAnimating = true;
      }

      $("body").toggleClass("navigation-is-open");
      $(".cd-navigation-wrapper").one(
        "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
        () => {
          // animation is over
          isLateralNavAnimating = false;
        }
      );
    }
  }

  goTo(path?: string) {
    path = path ? path : "/";
    this.router.navigate([path]);
    this.toggleNavigation();
  }

  isSelected(path?: string) {
    return this.router.isActive(path ?? "/", {
      paths: "exact",
      queryParams: "ignored",
      fragment: "ignored",
      matrixParams: "ignored",
    });
  }
}
