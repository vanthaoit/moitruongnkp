import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import {HttpProviderService} from '../../../core/services/http-provider.service';
import {Routes,RouterModule} from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';

export const detailsRoutes:Routes =[

  { path: '', component: DetailsComponent}

]

@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    RouterModule.forChild(detailsRoutes)
  ],
  providers:[HttpProviderService]
  
})
export class DetailsModule { }
