import { IParams } from './../../utilities/interfaces/IParams';
import { StoreProcedureConstants } from './../../core/common/store-procedure.constants';
import { Component, OnInit } from "@angular/core";
import { BreadcrumbUrlService } from "../../core/services/breadcrumb-url.service";
import { ReactSliderApplication } from "./react-slider";
import { HttpProviderService } from "../../../app/core/services/http-provider.service";
import { ReactRepresentedItemApplication } from './react-represented-item';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from "@angular/platform-browser";
@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"],
})
export class IndexComponent implements OnInit {
  _breadcrumbURL: string = "trang chủ";
  _highlightVideo:SafeResourceUrl;
  constructor(
    private breadcrumb: BreadcrumbUrlService,
    private _httpService: HttpProviderService,
    private sanitizer: DomSanitizer
  ) {
    this.breadcrumb.changeMessage(this._breadcrumbURL);
  }

  ngOnInit() {
    //this.getItem();

  }

  getItem() {
    var data:IParams[] = [{
      Key:"id",
      Value:1
    }];

    // this._httpService.post('Product/GetWithProcedure/'+StoreProcedureConstants.usp_SEL_IndexSlider,[]).subscribe((resp:any)=>{
    //   ReactSliderApplication.Initialize("slideCarousel",resp);

    // }, error => {
  
    //   this._httpService.handleError(error)
    // });

     this._httpService.post('Product/GetWithProcedure/'+StoreProcedureConstants.usp_SEL_HighlightItems,[]).subscribe((resp:any)=>{
  
       ReactRepresentedItemApplication.Initialize('represented-item',resp[0]);
     }, error => {
   
       this._httpService.handleError(error)
     });

    this._httpService.post('Product/GetWithProcedure/'+StoreProcedureConstants.usp_SEL_HighlightVideo,[]).subscribe((resp:any)=>{
  
      this._highlightVideo = this.sanitizer.bypassSecurityTrustResourceUrl(resp[0].image);
      console.log("video = "+this._highlightVideo);
    }, error => {
  
      this._httpService.handleError(error)
    });
    
  }

}
