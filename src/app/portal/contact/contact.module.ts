import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import {Routes,RouterModule} from '@angular/router';

export const contactRoutes: Routes =[
  //4200/main/user/index
  {path:'',component:ContactComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(contactRoutes)
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
