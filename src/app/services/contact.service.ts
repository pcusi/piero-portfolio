import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Contact} from '../models/Contact';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  public url: any;

  constructor(
    private _http: HttpClient
  ) {
    this.url = environment.apiUrl;
  }

  contactMe(contact: Contact) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this._http.post(this.url+'contact-me', JSON.stringify(contact), {headers});
  }
}
