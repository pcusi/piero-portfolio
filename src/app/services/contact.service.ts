import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Contact} from '../models/Contact';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private _http: HttpClient
  ) { }

  contactMe(contact: Contact) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this._http.post(environment.api+'contact-me', JSON.stringify(contact), {headers});
  }
}
