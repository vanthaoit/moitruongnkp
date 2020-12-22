import { Component, OnInit, Input, ViewChild, Injector } from "@angular/core";
import { ModalDirective } from "ngx-bootstrap/modal";
import { BreadcrumbUrlService } from "../../../core/services/breadcrumb-url.service";
import { Material } from "../../../utilities/data/product.data";
import { HttpProviderService } from "../../../core/services/http-provider.service";
import { ReactDataApplication } from "../data/react-data.component";
import { ReactSidebarApplication } from "../../../shared/sidebar-menu/sidebar-menu/react-sidebar";
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { StoreProcedureConstants } from 'src/app/core/common/store-procedure.constants';
import { title } from 'process';

declare var $: any;

@Component({
  selector: "app-data",
  templateUrl: "./data.component.html",
  styleUrls: ["./data.component.css"],
})
export class DataComponent implements OnInit {
  _lastBreabcrumb: string = "";
  _output: string;
  public entity: any;
  public _materialProduct: any;
  _dataHttpService: any[];
  _dataCategory: any[];
  _test: any;
  _description:any;
  private routeSub: Subscription;
  _aliasTarge: string;
  _title:string;

  constructor(
    private breadcrumb: BreadcrumbUrlService,
    private _httpService: HttpProviderService,
    private injector: Injector,
    private route: ActivatedRoute
  ) {
    this.breadcrumb.currentBreadcrumb.subscribe(
      (mess) => (this._output = mess)
    );
    
  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['name']) //log the value of id
      this._aliasTarge = params['name'];
    });
    this._httpService.get("productcategory/getall").subscribe(
      (resp: any[]) => {
        this._dataCategory = resp;
        //ReactSidebarApplication.Initialize('accordion',resp);
        console.log("category = " + this._dataCategory);
      },
      (error) => {
        debugger;
        this._httpService.handleError(error);
      }
    );
    this.getItems();
    this.entity = { Content: "" };
    this.getCategoryName();
    this.breadcrumb.changeMessage(this._output + this._lastBreabcrumb);
  }

  getItems() {
    
    this._httpService.post('product/GetWithProcedure/'+StoreProcedureConstants.usp_SEL_ProductsFilterCategory,[{"Key":'categoryAlias',"Value":this._aliasTarge.trim().toString()}]).subscribe(
      (resp: any[]) => {
        this._dataHttpService = resp;

        this._httpService.post('product/GetWithProcedure/'+StoreProcedureConstants.usp_SEL_CategoryFilterAlias,[{"Key":'categoryAlias',"Value":this._aliasTarge.trim().toString()}]).subscribe(
          (resp: any[]) => {
    
            this._lastBreabcrumb = ","+resp[0].content;
            this._title = resp[0].content;
            this._description = resp[0].description;
            ReactDataApplication.initialize(
              "product-detail",
              this.injector,
              this._dataHttpService,
              this._title,
              this._description
            );
          },
          (error) => {
            debugger;
            this._httpService.handleError(error);
          }
        );
      },
      (error) => {
        debugger;
        this._httpService.handleError(error);
      }
    );

  }

  getCategoryName(){
    this._httpService.post('product/GetWithProcedure/'+StoreProcedureConstants.usp_SEL_CategoryFilterAlias,[{"Key":'categoryAlias',"Value":this._aliasTarge.trim().toString()}]).subscribe(
      (resp: any[]) => {

        this._lastBreabcrumb = ","+resp[0].content;
        this._title = resp[0].content;
      },
      (error) => {
        debugger;
        this._httpService.handleError(error);
      }
    );
  }

  public saveChanges() {
    let abc = this.entity;
    debugger;
  }
}
