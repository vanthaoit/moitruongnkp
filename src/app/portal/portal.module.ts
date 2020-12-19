import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PortalComponent } from "./portal.component";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import { portalRoutes } from "./portal.routes";
import { FormsModule } from "@angular/forms";
import { NavigationMenuComponent } from "../shared/navigation-menu/navigation-menu.component";
import { BottomMenuComponent } from "../shared/bottom-menu/bottom-menu.component";
import { HeaderMenuComponent } from "../shared/header-menu/header-menu.component";
import { NavBarComponent } from "../shared/nav-bar/nav-bar.component";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forChild(portalRoutes),
  ],
  declarations: [
    PortalComponent,
    HeaderMenuComponent,
    NavigationMenuComponent,
    BottomMenuComponent,
    NavBarComponent,
  ],
})
export class PortalModule {}
