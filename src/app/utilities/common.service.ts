import { Injectable } from '@angular/core';
import { navigationAction, navigationActiveClass, navigationDropdownTabs } from 'src/app/common/navigation.constant';
import { HttpProviderService } from '../core/services/http-provider.service';
import { Observable } from 'rxjs';
import { IProduct } from './interfaces/IProduct';
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  _navigationMenu: string = navigationDropdownTabs.navigationDropdownTabsId;
  _isActiveMenu: any;
  _isActiveSubMenu: any;
  _currentMenu:any;
  _dataCategories:any[];
  constructor(private _httpService:HttpProviderService) {
    this._isActiveMenu = localStorage.getItem(navigationAction.activeMenu);
    this._isActiveSubMenu = localStorage.getItem(navigationAction.activeSubMenu);

  }

  initActiveMenu() {
    // Set Default active menu
    if (this._isActiveMenu == null || this._isActiveMenu == "") {
      localStorage.setItem(navigationAction.activeMenu, 'home');
      $(this._navigationMenu).find('a[data-title=home]').addClass(navigationActiveClass.activeClass);
      $(this._navigationMenu).find('span[data-title=home]').addClass(navigationActiveClass.activeClass);
    } else {
      this.executeActiveMenu();
    }

    $(this._navigationMenu + " a").on('click', function () {
      var menu = $(this);
      var isParentMenu = menu.hasClass('nav-link');
      var hasSubMenu = menu.parent().find('.dropdown-menu').length > 0;
      var title = $(this).data('title');

      localStorage.setItem(navigationAction.activeMenu, title);
      localStorage.setItem(navigationAction.activeSubMenu, '');

      this.executeActiveMenu();
    });
  }
  executeActiveMenu() {

    if (this._isActiveMenu !== null && this._isActiveMenu !== "") {
      $(this._navigationMenu).find('a').removeClass(navigationActiveClass.activeClass);
      $(this._navigationMenu).find('span').removeClass(navigationActiveClass.activeClass);
      $(this._navigationMenu).find('a[data-title=' + this._isActiveMenu + ']').addClass(navigationActiveClass.activeClass);
      $(this._navigationMenu).find('span[data-title=' + this._isActiveMenu + ']').addClass(navigationActiveClass.activeClass);

    }
  }
  getBreadcrumbAddress(){
    this._currentMenu = $(this._navigationMenu).find('a[data-title=' + this._isActiveMenu + ']');
    this._currentMenu = this._currentMenu != undefined ? this._currentMenu :$(this._navigationMenu).find('span[data-title=' + this._isActiveMenu + ']')
    return this._currentMenu;
  }

  getProductCategories(){
    return this._httpService.get('productcategory/getall');
  }



}
