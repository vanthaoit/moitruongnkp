import { AllRelativeProductComponent } from "./all-relative-product.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  imports:[CommonModule],
  declarations: [AllRelativeProductComponent],
  exports:[AllRelativeProductComponent]
})
export class AllRelativeProductModule {}
