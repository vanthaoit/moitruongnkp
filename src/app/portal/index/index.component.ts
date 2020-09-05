import { IParams } from './../../utilities/interfaces/IParams';
import { StoreProcedureConstants } from './../../core/common/store-procedure.constants';
import { Component, OnInit } from "@angular/core";
import { BreadcrumbUrlService } from "../../core/services/breadcrumb-url.service";
import { ReactSliderApplication } from "./react-slider";
import { HttpProviderService } from "../../../app/core/services/http-provider.service";
import { ReactRepresentedItemApplication } from './react-represented-item';
@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"],
})
export class IndexComponent implements OnInit {
  _breadcrumbURL: string = "trang chủ";
  constructor(
    private breadcrumb: BreadcrumbUrlService,
    private _httpService: HttpProviderService
  ) {
    this.breadcrumb.changeMessage(this._breadcrumbURL);
  }

  ngOnInit() {
    this.getItem();
  }

  getItem() {
    var data:IParams[] = [{
      Key:"id",
      Value:1
    }];

    this._httpService.post('Product/GetWithProcedure/'+StoreProcedureConstants.usp_SEL_IndexSlider,[]).subscribe((resp:any)=>{
      ReactSliderApplication.Initialize("slideCarousel",resp);
  
      ReactRepresentedItemApplication.Initialize('represented-item',resp[0]);
    }, error => {
      debugger
      this._httpService.handleError(error)
    });
    
  }
}
