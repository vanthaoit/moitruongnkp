import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import {DataComponent} from './data.component';
import {HttpProviderService} from '../../../core/services/http-provider.service';
import { ModalModule } from 'ngx-bootstrap/modal';
import {FormsModule} from '@angular/forms';

export const dataRoutes:Routes =[

  { path: '', component: DataComponent}

]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModalModule.forRoot(),
    RouterModule.forChild(dataRoutes)
  ],
  declarations: [DataComponent],
  providers:[HttpProviderService]
})
export class DataModule { }
