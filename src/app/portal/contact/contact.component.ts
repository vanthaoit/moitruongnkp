import { Component, OnInit } from '@angular/core';
import { BreadcrumbUrlService } from 'src/app/core/services/breadcrumb-url.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  _breadcrumbURL:string  = "liên hệ" ;
  constructor(private breadcrumb:BreadcrumbUrlService) { 
    this.breadcrumb.changeMessage(this._breadcrumbURL);
  }

  ngOnInit() {
  }

}
