import { Routes } from '@angular/router';
import { LoginModule } from './login/login.module';
import { PortalModule } from './portal/portal.module';
import { MainModule } from './main/main.module';

export const appRoutes: Routes = [
   //localhost:4200
   { path: '', redirectTo: 'portal', pathMatch: 'full' },

   { path: 'portal', loadChildren: './portal/portal.module#PortalModule' }
   //localhost:4200/login
   // { path: 'login', loadChildren: './login/login.module#LoginModule' }




];