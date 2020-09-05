import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { appRoutes } from './app.routes';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthenticationGuard } from '../app/core/guards/authentication.guard';
import { UtilityService } from '../app/core/services/utility.service';
import { PaginationModule } from 'ngx-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    PaginationModule.forRoot(),
    MDBBootstrapModule.forRoot()
  ],
  providers: [AuthenticationGuard, UtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
