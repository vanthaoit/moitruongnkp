import { Component, OnInit } from "@angular/core";
import { ReactDataApplication } from "../../portal/services/data/react-data.component";
import { HttpProviderService } from "../../core/services/http-provider.service";
import { StoreProcedureConstants } from './../../core/common/store-procedure.constants';

@Component({
  selector: "app-all-relative-product",
  templateUrl: "./all-relative-product.component.html",
  styleUrls: ["./all-relative-product.component.css"],
})
export class AllRelativeProductComponent implements OnInit {
  _products: any[];
  constructor(private _httpService: HttpProviderService) {}

  ngOnInit() {
    this._httpService
      .post(
        "product/GetWithProcedure/" +
          StoreProcedureConstants.usp_SEL_ProductsFilterCategory,
        [{"Key":'categoryAlias',"Value":""}]
      )
      .subscribe((resp: any[]) => {
        this._products = resp;
        console.log("_products = " + this._products);
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
}
