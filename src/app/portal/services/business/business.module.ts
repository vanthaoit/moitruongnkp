import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import {BusinessComponent} from './business.component';

export const dataRoutes:Routes =[

  {path:'',component:BusinessComponent}

]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dataRoutes)
  ],
  declarations: [BusinessComponent]
})
export class BusinessModule { }
