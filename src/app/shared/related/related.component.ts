import { Component, OnInit } from '@angular/core';
import { ReactRelativeApplication } from './react-relative.component';
import {HttpProviderService} from  '../../core/services/http-provider.service';
import { StoreProcedureConstants } from './../../core/common/store-procedure.constants';


@Component({
  selector: 'app-related',
  templateUrl: './related.component.html',
  styleUrls: ['./related.component.css']
})
export class RelatedComponent implements OnInit {

  constructor(private _httpService:HttpProviderService) { }

  ngOnInit() {
   
  }
  

}
