import { Injectable } from '@angular/core';
import { HttpProviderService } from './http-provider.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  _dataMenu:any;
  constructor(private _httpService:HttpProviderService) { }

  getMenu(){

    return this._httpService.get('menu/getall');
  }
}
