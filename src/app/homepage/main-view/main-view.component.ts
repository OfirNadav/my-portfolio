import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'onv-main-view',
  templateUrl: './main-view.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class MainViewComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit() {

    this.appService.typed();

    this.appService.slippry();

    this.appService.scrollReveal();

  }

}
