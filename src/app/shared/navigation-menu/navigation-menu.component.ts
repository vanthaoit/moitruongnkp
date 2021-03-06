import { Component, OnInit, Injector } from '@angular/core';
import {CommonService} from  'src/app/utilities/common.service';
import {menuData} from 'src/app/utilities/data/menu.data';
import {BreadcrumbUrlService} from '../../core/services/breadcrumb-url.service';
import { HttpProviderService } from 'src/app/core/services/http-provider.service';
import { Observable } from 'rxjs';
import { ReactNavigationMenu } from './react-navigation-menu';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent implements OnInit {
  _currentActiveMenu:any;
  _currentBreabcrumb:string;
  _breabcrumbArray:any[];
  public _menuData:any[];
  _dataCategories:any;


  constructor(private _commonService:CommonService,
    private curentBreadcrumb:BreadcrumbUrlService,
    private _httpService:HttpProviderService,
    public injector: Injector) { 
    this._currentActiveMenu = _commonService.getBreadcrumbAddress();
    this._menuData = menuData;
    this.curentBreadcrumb.currentBreadcrumb.subscribe(message=> this._currentBreabcrumb = message);
    this._breabcrumbArray = this._currentBreabcrumb.split(",");
  }

  ngOnInit() {
    this._commonService.initActiveMenu();
    this.loadProducCategories();
    this._menuData = menuData;
  }
  switchMenu(){
    this._commonService.initActiveMenu();
  }
  loadProducCategories(){

    this._httpService.get('productcategory/getall').subscribe((response:any)=>{ 
        this._dataCategories = response;
        
      }); 
  }

}
