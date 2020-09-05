import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../core/services/authentication.service";
import {
  SystemConstants,
  BaseSystemConstants,
} from "../core/common/system.constants";
import { UtilityService } from "../core/services/utility.service";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"],
})
export class MainComponent implements OnInit {
  public user: any = {};
  constructor(
    private _authenticationService: AuthenticationService,
    private _utility: UtilityService
  ) {}

  ngOnInit() {
    this.user = JSON.parse(
      localStorage.getItem(BaseSystemConstants.CURRENT_USER)
    );
    console.log(this.user);
  }
  logOut() {
    localStorage.removeItem(BaseSystemConstants.CURRENT_USER);
    this._utility.navigateToLogin();
  }
}
