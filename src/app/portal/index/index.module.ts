import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import {RouterModule,Routes} from '@angular/router';


export const indexRoutes: Routes =[
  //4200/main/user/index
  {path:'',component:IndexComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(indexRoutes)
  ],
  declarations: [IndexComponent]
})
export class IndexModule { }
