import { Component, OnInit } from '@angular/core';
import {BreadcrumbUrlService} from '../../core/services/breadcrumb-url.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  _breadcrumbURL:string  = "giới thiệu" ;
  constructor(private breadcrumb:BreadcrumbUrlService) { 
    this.breadcrumb.changeMessage(this._breadcrumbURL);
  }



  ngOnInit() {
  }

}
