import { Routes } from '@angular/router';
import { MainComponent } from './main.component';
import {ProductModule} from './product/product.module';
import {ProductCategoryModule} from './product-category/product-category.module';
import {FunctionModule} from './function/function.module';


export const mainRoutes: Routes = [

    {
        path: '', component: MainComponent, children: [

            { path: '', redirectTo: 'product', pathMatch: 'full' },

            { path: 'home', loadChildren: './home/home.module#HomeModule' },

            { path: 'user', loadChildren: './user/user.module#UserModule' },

            { path: 'product', loadChildren: ()=>ProductModule },
            { path: 'product-category', loadChildren: () =>ProductCategoryModule },
            { path: 'function', loadChildren: ()=>FunctionModule }
        ]
    }

];