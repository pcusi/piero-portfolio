/* tslint:disable */
import {Component, OnInit} from '@angular/core';
import {AboutService} from '../../services/about.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  public technologies: any;
  public experiences: any;

  constructor(
    private _a: AboutService
  ) {
  }

  ngOnInit(): void {
    this.getTechs();
    this.getExps();
  }

  getTechs() {
    this._a.getTechs().subscribe((data: any) => {
      this.technologies = data.technologies;
    });
  }

  getExps() {
    this._a.getExps().subscribe((data: any) => {
      this.experiences = data.experiences;
    });
  }

}
