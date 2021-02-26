import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HOME, PRODUCTS } from './constants/routes.constants';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: HOME.name,
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: PRODUCTS.name,
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  {
    path: '',
    redirectTo: HOME.url,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
