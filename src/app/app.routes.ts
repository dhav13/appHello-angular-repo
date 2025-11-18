import { Routes } from '@angular/router';
import { HomePage } from './components/home-page/home-page';
import { Products } from './components/products/products';
import { NoPageFound } from './components/no-page-found/no-page-found';
import { FeatureService } from './components/feature-service/feature-service/feature-service';

export const routes: Routes = [
    {
        path: 'service', 
        component: FeatureService,
    },
    {
        path: '',   // empty loading ruote
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home', //feature ruotes
        component: HomePage,
    },
    {
        path: 'product', //feature ruotes
        // component: Products
        //loadComponent: () => import('./components/products/products').then(mod => mod.Products)
        loadChildren: () => import('./components/products/products.routes').then((m) => m.PRODUCT_ROUTES),
    },
    {
        path:'feature-auth',
        loadChildren:() => import('./components/feature-auth/feature-auth.routes').then((m) => m.FEATURE_AUTH_ROUTES)
    },
    // {
    //     path: '**',  //wild card route, should be kept at last
    //     // component: NoPageFound
    //     loadComponent: () => import('./components/no-page-found/no-page-found').then(m => m.NoPageFound)
    // }

];
