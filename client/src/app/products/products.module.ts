import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/products/product/product.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsService } from './services/products.service';


@NgModule({
  declarations: [ProductsComponent, ProductComponent, SidebarComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule
  ],
  providers: [ProductsService]
})
export class ProductsModule { }
