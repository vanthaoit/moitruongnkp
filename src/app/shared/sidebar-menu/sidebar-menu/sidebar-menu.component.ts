import { Component, OnInit } from '@angular/core';
import { menuData} from 'src/app/utilities/data/menu.data';
import { HttpProviderService } from 'src/app/core/services/http-provider.service';
import { ReactSidebarApplication } from './react-sidebar';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent implements OnInit {

  _serviceMenu:any;
  constructor(private _httpService:HttpProviderService) { }

  ngOnInit() {
    this.loadProducCategories();
  }

  loadProducCategories(){

    this._httpService.get('productcategory/getall').subscribe((response:any)=>{ 
        ReactSidebarApplication.Initialize('accordion',response);
        //this._serviceMenu = response;
        
      }); 
  }

}
