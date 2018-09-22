import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'onv-about',
  templateUrl: './about.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AboutComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.scrollReveal();
  }

}
