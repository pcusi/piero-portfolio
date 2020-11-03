/* tslint:disable */
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(
    private _http: HttpClient
  ) {
  }

  getTechs() {
    return this._http.get('../../assets/json/technologies.json');
  }

  getExps() {
    return this._http.get('../../assets/json/experiences.json');
  }

  getPort() {
    return this._http.get('../../assets/json/portfolio.json');
  }
}
