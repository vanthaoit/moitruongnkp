import { Component, OnInit, Injector } from "@angular/core";
import { MenuService } from "./../../core/services/menu.service";
import { BreadcrumbUrlService } from "../../core/services/breadcrumb-url.service";
import { HttpProviderService } from "src/app/core/services/http-provider.service";
import { ReactRepresentedItemApplication } from '../../portal/index/react-represented-item';
import { StoreProcedureConstants } from './../../core/common/store-procedure.constants';

declare var $: any;

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"],
})
export class NavBarComponent implements OnInit {
  _currentActiveMenu: any;
  _currentBreabcrumb: string;
  _breabcrumbArray: any[];
  public _menuData: any[];
  _dataCategories: any;
  _menuService: any[];
  constructor(
    private curentBreadcrumb: BreadcrumbUrlService,
    private _httpService: HttpProviderService,
    public injector: Injector,
    public menuService: MenuService
  ) {
    this.curentBreadcrumb.currentBreadcrumb.subscribe(
      (message) => (this._currentBreabcrumb = message)
    );
    this._breabcrumbArray = this._currentBreabcrumb.split(",");
  }

  ngOnInit() {
    this.loadProducCategories();
    this.menuService.getMenu().subscribe((resp: any[]) => {
      this._menuService = resp.filter((x) => x.status == true && x.target !=="header").sort((a,b)=> a.displayOrder - b.displayOrder);
    });
    this.getItem();
  }
  clickSub(event) {
    var openMenu = "open";
    var exeJquery = ".sub";

    var onClick = $(event.currentTarget).parent().hasClass(openMenu);
    if (onClick) {
      $(event.currentTarget).parent().removeClass(openMenu);
      //$(this).parent().removeClass("open");
    } else {
      $(event.currentTarget).parent().addClass(openMenu);
      //$(this).parent().addClass("open");
    }
  }

  loadProducCategories() {
    this._httpService
      .get("productcategory/getall")
      .subscribe((response: any) => {
        this._dataCategories = response;
      });
  }
  getItem() {
  

     this._httpService.post('Product/GetWithProcedure/'+StoreProcedureConstants.usp_SEL_HighlightItems,[]).subscribe((resp:any)=>{
  
       ReactRepresentedItemApplication.Initialize('represented-item',resp[0]);
     }, error => {
   
       this._httpService.handleError(error)
     });
    }
}
