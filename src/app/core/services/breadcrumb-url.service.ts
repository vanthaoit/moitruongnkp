import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BreadcrumbUrlService {

  breadcrumbSource = new BehaviorSubject<string>("default message");
  currentBreadcrumb = this.breadcrumbSource.asObservable();
  constructor() { }
  changeMessage(message) {
    this.breadcrumbSource.next(message);
  }

  

}
