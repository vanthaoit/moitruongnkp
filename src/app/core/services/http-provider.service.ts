import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Routes } from '@angular/router';
import { NotificationService } from './notification.service';
import { AuthenticationService } from './authentication.service';
import { SystemConstants, BaseSystemConstants } from '../common/system.constants';
import { MessageConstants } from '../common/message.constants';
import { UtilityService } from './utility.service';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {

  private _header: HttpHeaders;
  constructor(private _http: HttpClient, 
    private _notificationService: NotificationService,
    private _utilityService: UtilityService) {
    this._header = new HttpHeaders();
    this._header.append("Content-Type", BaseSystemConstants.HEADER_CONTENT_TYPE_JSON);
  }


  get(uri: string) {
   
    return this._http.get(SystemConstants.URL_LOCAL_HOST_API_ENDPOINT + uri, { headers: this._header }).pipe(catchError(this.handleError));

  }
  post(uri: string, data?: any) {
    this.getHeader();
   
    return this._http.post(SystemConstants.URL_LOCAL_HOST_API_ENDPOINT + uri, data, { headers: this._header } ).pipe(catchError(this.handleError));

  }
  put(uri: string, data?: any) {
    this.getHeader();
    return this._http.put(SystemConstants.URL_LOCAL_HOST_API_ENDPOINT + uri, data, { headers: this._header }).pipe(catchError(this.handleError));
  }
  delete(uri: string, key: string, id: string) {
    this.getHeader();
    return this._http.delete(SystemConstants.URL_LOCAL_HOST_API_ENDPOINT + uri + "/?" + key + "=" + id, { headers: this._header }).pipe(catchError(this.handleError));
  }
  postFile(uri: string, data?: any) {

  }
  private extractData(response: Response) {
    let data = response.json();
    return data || {}
  }
  private getHeader(){
    this._header.delete(BaseSystemConstants.AUTHORIZATION);
    //this._header.append(SystemConstants.AUTHORIZATION, SystemConstants.BEARER +" " + this._authenticationService.getLogInUser().access_token);
  }
  handleError(error: any) {
    if (error.status == 401) {

      this._notificationService.displayErrorMessage(MessageConstants.LOGIN_TRY_AGAIN_MSG);
      localStorage.removeItem(BaseSystemConstants.CURRENT_USER);
      //this._utilityService.navigateToLogin();
    } else {
      let errMessage = (error.message) ? error.message : (error.status) ? "$error.status - $error.statusText" : MessageConstants.SYSTEM_ERROR_MSG;
      this._notificationService.displayErrorMessage(errMessage);
      return Observable.throw(errMessage);
    }
  }

}
