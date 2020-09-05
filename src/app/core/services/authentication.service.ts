import { Injectable } from '@angular/core';
import { LoggedInUser } from '../domain/logged-in.user';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { SystemConstants, BaseSystemConstants } from '../common/system.constants';

@Injectable()
export class AuthenticationService {


  constructor(private _http: Http) {

  }

  logIn(userName: string, password: string) {

    let body =
      "username=" + encodeURIComponent(userName)
      + "&password=" + encodeURIComponent(password)
      + "&grant_type=password";
    let headers = new Headers();
    headers.append("Content-Type", BaseSystemConstants.HEADER_CONTENT_TYPE_URLENDCODED);

    let promise = new Promise((resolve, reject) => {
      this._http.post(SystemConstants.URL_LOCAL_HOST_API_ENDPOINT + SystemConstants.URL_OAUTH_TOKEN, body, {headers: headers})
        .subscribe((response: any) => {
          const user: LoggedInUser = response.json();
          console.log(user);
          if (user && user.access_token) {
            localStorage.removeItem(BaseSystemConstants.CURRENT_USER);
            localStorage.setItem(BaseSystemConstants.CURRENT_USER, JSON.stringify(user));
            resolve(true);
          }
          else {
            reject(false);
          }
        }, error => {
          reject(error);
        });
    });
    return promise;

  }

  logOut() {
    localStorage.removeItem(BaseSystemConstants.CURRENT_USER);

  }

  isAuthenticated(): boolean {
    let user = localStorage.getItem(BaseSystemConstants.CURRENT_USER);
    if (user)
      return true;
    else
      return false;
  }

  getLogInUser(): LoggedInUser {

    let user: LoggedInUser;

    if (this.isAuthenticated) {
      var userData = JSON.parse(localStorage.getItem(BaseSystemConstants.CURRENT_USER));
      user = new LoggedInUser(userData.access_token, userData.userName, userData.fullName, userData.email, userData.avatar);
      return user;
    } else {
      user = null;
    }

    return user;
  }

}
