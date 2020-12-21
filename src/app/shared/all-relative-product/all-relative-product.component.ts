import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Renderer2,
  HostListener,
  AfterViewInit,
} from "@angular/core";
import { ReactDataApplication } from "../../portal/services/data/react-data.component";
import { HttpProviderService } from "../../core/services/http-provider.service";
import { StoreProcedureConstants } from "./../../core/common/store-procedure.constants";

declare var $: any;

@Component({
  selector: "app-all-relative-product",
  templateUrl: "./all-relative-product.component.html",
  styleUrls: ["./all-relative-product.component.css"],
})
export class AllRelativeProductComponent implements OnInit {
  _products: any[];
  theFirstTime:boolean = true;
  itemsPerPageDefault: number = 9;
  positionPage: string = ".paging-gallery";
  constructor(
    private _httpService: HttpProviderService,
    elementRef: ElementRef,
    renderer: Renderer2
  ) {
    renderer.listen("body", "click", (event) => {
      console.log("click render here");
      this.clickPaging(event);
    });
  }

  ngOnInit() {
    this._httpService
      .post(
        "product/GetWithProcedure/" +
          StoreProcedureConstants.usp_SEL_ProductsFilterCategory,
        [{ Key: "categoryAlias", Value: "" }]
      )
      .subscribe((resp: any[]) => {
        this._products = resp;
        console.log("_products length= " + this._products.length);
        var totalPage = Math.ceil(resp.length / this.itemsPerPageDefault);
        console.log("totalPage length= " + totalPage);
        this.initialPaging(totalPage);
      });

    // this._httpService.get("productcategory/getall").subscribe(
    //   (resp: any[]) => {
    //     this._products = resp.filter((x) => x.isActive == true);
    //     console.log("_products = " + this._products);
    //   },
    //   (error) => {
    //     debugger;
    //     this._httpService.handleError(error);
    //   }
    // );
  }
  ngDoCheck() {
    if(this.theFirstTime)
    this.goToCurrentPage("1");
  }


  clickPaging(event) {
    this.theFirstTime = false;
    $(".tm-paging-link").removeClass("active");
    let currentId = "#"+event.target.id;
    $(currentId).addClass("active");
    var page = $(event.target).eq(0).attr("data-page");
    //goToPage(page);
    this.goToCurrentPage(page);
  }
  goToCurrentPage(n) {
    let currentPage = n;
    if(currentPage !== undefined){
      var wordPage = currentPage.toString();
      $(".tm-gallery-item").addClass("close-items");
      $("." + wordPage).removeClass("close-items");
    }
    
  }
  initialPaging(totalPaging) {
    for (let i = 1; i <= totalPaging; i++) {
      var pager = $(
        '<a href="javascript:;" class="tm-paging-link" id="page-id'+i+'" (click)="clickPaging($event)" data-page="' +
          i +
          '">' +
          i +
          "</a>"
      );
      $(this.positionPage).append(pager);
    }
  }
}
