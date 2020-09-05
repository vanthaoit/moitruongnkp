import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading: boolean = false;
  model: any = {};

  constructor(

    ) { }

  ngOnInit() {
    this.logIn();
  }

  logIn() {
    //ReactLoginApplication.Initialize("menu-login-button");

  }
  displaySuccess(){
    
  }
  
}
