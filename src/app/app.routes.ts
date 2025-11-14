import { Routes } from '@angular/router';
import { HomePage } from './components/home-page/home-page';
import { Products } from './components/products/products';
import { NoPageFound } from './components/no-page-found/no-page-found';

export const routes: Routes = [
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
    // { 
    //     path: 'v1', 
    //     redirectTo: 'product', 
    //     pathMatch: 'prefix' 
    // },
    {
        path: '**',  //wild card route, should be kept at last
        // component: NoPageFound
        loadComponent: () => import('./components/no-page-found/no-page-found').then(mod => mod.NoPageFound)
    }
];
