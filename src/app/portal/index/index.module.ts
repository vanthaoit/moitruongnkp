import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IndexComponent } from "./index.component";
import { RouterModule, Routes } from "@angular/router";
import { AllRelativeProductModule } from "../../shared/all-relative-product/all-relative-product.module";

export const indexRoutes: Routes = [
  //4200/main/user/index
  { path: "", component: IndexComponent },
];

@NgModule({
  imports: [
    CommonModule,
    AllRelativeProductModule,
    RouterModule.forChild(indexRoutes),
  ],
  declarations: [IndexComponent],
})
export class IndexModule {}
