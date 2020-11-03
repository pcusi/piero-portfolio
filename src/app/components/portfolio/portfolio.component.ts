/* tslint:disable */
import {Component, OnInit} from '@angular/core';
import {AboutService} from '../../services/about.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  public portfolio: any;

  constructor(
    private _a: AboutService
  ) {
  }

  ngOnInit(): void {
    this.getPort();
  }

  getPort() {
    this._a.getPort().subscribe((data: any) => {
      this.portfolio = data.portfolio;
    });
  }

}
