import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'onv-portfolio',
  templateUrl: './portfolio.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class PortfolioComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.scrollReveal();
  }

}
