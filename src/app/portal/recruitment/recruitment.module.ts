import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecruitmentComponent } from './recruitment.component';
import {RouterModule,Routes} from '@angular/router';

export const recruitmentRoutes: Routes =[
  //4200/main/user/index
  {path:'',component:RecruitmentComponent}
];

@NgModule({
  declarations: [RecruitmentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(recruitmentRoutes)
  ]
})
export class RecruitmentModule { }
