import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'onv-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    // hide #back-top first
    this.appService.hideBackTop();

    // fade in #back-top
    this.appService.fadeInBackTop();
  }

  scrollToTop() {
    this.appService.scrollToTop();
  }


}
