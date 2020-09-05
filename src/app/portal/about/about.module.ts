import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router'
import {AboutComponent} from './about.component'

export const aboutRoutes: Routes =[
  {path:'',component:AboutComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(aboutRoutes)
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
