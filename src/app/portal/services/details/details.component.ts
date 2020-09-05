import { Component, OnInit, Injector, Input } from '@angular/core';
import { ReactDetailApplication } from './react-detail-application.details';
import { BehaviorSubject, Subscription } from 'rxjs';
import { IProduct } from '../../../utilities/interfaces/IProduct';
import { ReactDataApplication } from '../data/react-data.component';
import { ActivatedRoute } from '@angular/router';
import { HttpProviderService } from 'src/app/core/services/http-provider.service';
import { ReactRelativeApplication } from 'src/app/shared/related/react-relative.component';
import { StoreProcedureConstants } from '../../../core/common/store-procedure.constants';
import { ReactSidebarApplication } from '../../../shared/sidebar-menu/sidebar-menu/react-sidebar';
declare function initialRelativeLoad():any;

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {

  @Input() details$: BehaviorSubject<IProduct[]>;
  private routeSub: Subscription;
  _dataHttpService: any[];
  _idTarge: number;
  constructor(public injector: Injector,
    private route: ActivatedRoute,
    private _httpService: HttpProviderService, ) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
      this._idTarge = params['id'];
    });
    this.getDetails();
    this.getRelated();

  }

  getDetails() {
    console.log("idTarget = " + this._idTarge);
    this._httpService.get('product/get/' + this._idTarge).subscribe((resp: any[]) => {

      this._dataHttpService = resp;
      ReactDetailApplication.initialize('react-renderer', this.injector, this._dataHttpService);
      console.log(this._dataHttpService);
    }, error => {
      debugger
      this._httpService.handleError(error)
    });
  }
  getRelated(){
    this._httpService.post('Product/GetWithProcedure/'+StoreProcedureConstants.usp_SEL_IndexSlider,[{"Key":'Id',"Value":this._idTarge.toString()}]).subscribe((resp:any)=>{
      debugger
      ReactRelativeApplication.initialize('render-relative',resp);
      initialRelativeLoad();
      console.log("related = "+resp);
    }, error => {
      debugger
      this._httpService.handleError(error)
    });

    
}



}

// @Component({
//   selector: 'app-details',
//   templateUrl: './details.component.html',
//   styleUrls: ['./details.component.css']
// })
// export class DetailsComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
