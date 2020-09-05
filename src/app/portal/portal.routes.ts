import { Routes } from '@angular/router';
import { PortalComponent } from './portal.component';
import {IndexModule} from './index/index.module';
import {AboutModule} from './about/about.module';
import {ServicesModule} from './services/services.module';
import {ContactModule} from './contact/contact.module';
import {RecruitmentModule} from './recruitment/recruitment.module';

export const portalRoutes: Routes = [
    {
          //localhost:4200/
          path: '', component: PortalComponent, children: [
            //localhost:4200/front-end
            { path: '', redirectTo: 'trang-chu', pathMatch: 'full' },
            //localhost:4200/front-end/home
            { path: 'trang-chu', loadChildren: './index/index.module#IndexModule' },
            //{ path: 'index', loadChildren: () =>IndexModule },

            { path: 'gioi-thieu', loadChildren: './about/about.module#AboutModule' },

            { path: 'dich-vu', loadChildren: './services/services.module#ServicesModule' },

            { path: 'lien-he', loadChildren: './contact/contact.module#ContactModule' },
            //{ path: 'contact', loadChildren: () =>ContactModule },

            { path: 'tuyen-dung', loadChildren: './recruitment/recruitment.module#RecruitmentModule' }
            //{ path: 'recruitment', loadChildren: () =>RecruitmentModule }

        ]
    }
];

