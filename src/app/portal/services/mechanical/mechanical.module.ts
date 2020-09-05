import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import {MechanicalComponent} from  './mechanical.component';

export const mechanicalRoutes:Routes =[

  {path:'',component:MechanicalComponent}

]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(mechanicalRoutes)
  ],
  declarations: [MechanicalComponent]
})
export class MechanicalModule { }
