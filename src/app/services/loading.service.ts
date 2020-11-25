import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public count = 0;
  private spinner$ = new BehaviorSubject<string>('');

  constructor() { }

  loading():Observable<string> {
    return this.spinner$.asObservable();
  }
}
