import { Routes } from '@angular/router';
import { Products } from './products';

export const PRODUCT_ROUTES: Routes = [
  {
    path: '',
    component: Products,
    children: [
      {
        path: 'product-details/:id',
        loadComponent: () =>import('./product-details/product-details').then((m) => m.ProductDetails),
      }
    ]
  }
];